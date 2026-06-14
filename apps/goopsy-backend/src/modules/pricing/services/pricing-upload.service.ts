import {
  Injectable,
  BadRequestException,
} from '@nestjs/common';

import * as XLSX from 'xlsx';

import { PrismaService } from '../../../shared/prisma/prisma.service';

@Injectable()
export class PricingUploadService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  //////////////////////////////////////////////////////
  // 📤 UPLOAD PRICING SHEET
  //////////////////////////////////////////////////////

  async upload(file: any) {
    //////////////////////////////////////////////////////
    // FILE VALIDATION
    //////////////////////////////////////////////////////

    if (!file) {
      throw new BadRequestException(
        'Excel file is required',
      );
    }

    //////////////////////////////////////////////////////
    // READ EXCEL
    //////////////////////////////////////////////////////

    const workbook = XLSX.read(
      file.buffer,
      {
        type: 'buffer',
      },
    );

    const sheetName =
      workbook.SheetNames[0];

    const sheet =
      workbook.Sheets[sheetName];

    //////////////////////////////////////////////////////
    // CONVERT TO JSON
    //////////////////////////////////////////////////////

    const rows: any[] =
      XLSX.utils.sheet_to_json(
        sheet,
        {
          defval: '',
        },
      );

    //////////////////////////////////////////////////////
    // EMPTY FILE CHECK
    //////////////////////////////////////////////////////

    if (!rows.length) {
      throw new BadRequestException(
        'Excel sheet is empty',
      );
    }

    //////////////////////////////////////////////////////
    // LOOP ROWS
    //////////////////////////////////////////////////////

    for (const rawRow of rows) {
      console.log(rawRow);

      //////////////////////////////////////////////////////
      // NORMALIZE HEADERS
      //////////////////////////////////////////////////////

      const brand =
        rawRow.Brand ||
        rawRow.brand ||
        '';

      const model =
        rawRow.Model ||
        rawRow.model ||
        '';

      const storage =
        rawRow.Storage ||
        rawRow.storage ||
        '';

      const dealerPrice =
        rawRow.DealerPrice ||
        rawRow.dealerPrice ||
        0;

      //////////////////////////////////////////////////////
      // VALIDATION
      //////////////////////////////////////////////////////

      if (
        !brand ||
        !model ||
        !storage
      ) {
        console.log(
          'Skipping invalid row:',
          rawRow,
        );

        continue;
      }

      //////////////////////////////////////////////////////
      // UPSERT PRICE DEVICE
      //////////////////////////////////////////////////////

      await this.prisma.priceDevice.upsert(
        {
          where: {
            model_storage: {
              model:
                String(model).trim(),

              storage:
                String(storage).trim(),
            },
          },

          //////////////////////////////////////////////////////
          // UPDATE
          //////////////////////////////////////////////////////

          update: {
            brand:
              String(brand).trim(),

            basePrice: Number(
              dealerPrice || 0,
            ),

            platformFee: 0,
          },

          //////////////////////////////////////////////////////
          // CREATE
          //////////////////////////////////////////////////////

          create: {
            brand:
              String(brand).trim(),

            model:
              String(model).trim(),

            storage:
              String(storage).trim(),

            basePrice: Number(
              dealerPrice || 0,
            ),

            platformFee: 0,

            //////////////////////////////////////////////////////
            // CONDITION DEDUCTIONS
            //////////////////////////////////////////////////////

            condition: {
              create: {
                basicDeduction:
                  Number(
                    rawRow.BasicDeduction ||
                      0,
                  ),

                screenDeduction:
                  Number(
                    rawRow.ScreenDeduction ||
                      0,
                  ),

                bodyDeduction:
                  Number(
                    rawRow.BodyDeduction ||
                      0,
                  ),

                functionDeduction:
                  Number(
                    rawRow.FunctionDeduction ||
                      0,
                  ),

                accessoriesDeduction:
                  Number(
                    rawRow.AccessoriesDeduction ||
                      0,
                  ),
              },
            },

            //////////////////////////////////////////////////////
            // AGE MULTIPLIERS
            //////////////////////////////////////////////////////

            age: {
              create: {
                below3M:
                  Number(
                    rawRow[
                      'Below 3M'
                    ] || 0,
                  ),

                m3to6:
                  Number(
                    rawRow[
                      '3 to 6M'
                    ] || 0,
                  ),

                m6to11:
                  Number(
                    rawRow[
                      '6 to 11M'
                    ] || 0,
                  ),

                above11:
                  Number(
                    rawRow[
                      'Above 11M'
                    ] || 0,
                  ),
              },
            },
          },
        },
      );
    }

    //////////////////////////////////////////////////////
    // SUCCESS
    //////////////////////////////////////////////////////

    return {
      success: true,

      message:
        'Pricing uploaded successfully',
    };
  }
}