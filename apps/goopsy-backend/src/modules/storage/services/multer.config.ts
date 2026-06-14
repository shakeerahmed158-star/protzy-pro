import { memoryStorage } from 'multer';


export const multerOptions = {
  storage: memoryStorage(),

  limits: {
    fileSize: 50 * 1024 * 1024,
  },

  fileFilter: (
    req,
    file,
    callback,
  ) => {

    const allowedMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/webp',
      'video/mp4',
      'video/quicktime',
      'application/pdf',
    ];

    if (
      allowedMimeTypes.includes(
        file.mimetype,
      )
    ) {
      callback(null, true);
    } else {
      callback(
        new Error(
          'Unsupported file type',
        ),
        false,
      );
    }
  },
};