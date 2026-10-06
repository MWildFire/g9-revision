/** The classroom Punnett model uses two alleles of one diploid locus. */
export function isSingleLocusCross(parent1: string, parent2: string): boolean {
  return /^[A-Za-z]{2}$/.test(parent1) && /^[A-Za-z]{2}$/.test(parent2)
    && [...parent1, ...parent2].every(allele => allele.toUpperCase() === parent1[0].toUpperCase());
}

/** Equal segregation and random fertilisation give four equally likely pairings. */
export function singleLocusOutcomes(parent1: string, parent2: string): string[][] {
  if (!isSingleLocusCross(parent1, parent2)) return [];
  return [...parent1].map(a => [...parent2].map(b => [a, b].sort((x, y) => {
    if (x === y) return 0;
    return x === x.toUpperCase() ? -1 : 1;
  }).join('')));
}
