interface DeductionInput {
  hasScreenIssue?: boolean;

  hasBodyDamage?: boolean;

  hasFunctionalIssue?: boolean;

  missingAccessories?: boolean;

  screenDeduction: number;

  bodyDeduction: number;

  functionDeduction: number;

  accessoriesDeduction: number;
}

export function calculateDeductions(
  input: DeductionInput,
) {
  let total = 0;

  if (input.hasScreenIssue) {
    total += input.screenDeduction;
  }

  if (input.hasBodyDamage) {
    total += input.bodyDeduction;
  }

  if (input.hasFunctionalIssue) {
    total += input.functionDeduction;
  }

  if (input.missingAccessories) {
    total += input.accessoriesDeduction;
  }

  return {
    total,
  };
}