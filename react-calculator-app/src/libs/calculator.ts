export function format(number: string) {
  return new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 12,
  }).format(Number(number))
}

export function findLast(calculation: string[]) {
  return calculation[calculation.length - 1]
}

export function findLastOperator(calculation: string[]) {
  return calculation.reduce((acc, cur) => (isOperator(cur) ? cur : acc), '')
}

export function isOperator(token: string) {
  return ['+', '-', 'x', '/'].includes(token)
}

function PEMDAS(calculation: string[]) {
  const index = calculation.findIndex((operator) =>
    ['x', '/'].includes(operator),
  )

  return index !== -1
    ? index
    : calculation.findIndex((operator) => ['+', '-'].includes(operator))
}

function merge([left, operator, right]: string[]) {
  const optionCalc: { [key: string]: (left: number, right: number) => number } =
    {
      '/': (a: number, b: number) => a / b,
      'x': (a: number, b: number) => a * b,
      '+': (a: number, b: number) => a + b,
      '-': (a: number, b: number) => a - b,
    }

  return optionCalc[operator](Number(left), Number(right)).toString()
}

export function calculate(calculation: string[]): string[] {
  if (calculation.length < 3) return calculation

  const index = PEMDAS(calculation)

  if (index === -1) return calculation

  return calculate([
    ...calculation.slice(0, index - 1),
    merge(calculation.slice(index - 1, index + 2)),
    ...calculation.slice(index + 2),
  ])
}
