import fs from 'node:fs';

export async function withDeadline(operation, label, timeoutMs = 10000) {
  let timer;
  try {
    return await Promise.race([
      Promise.resolve().then(operation),
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(`${label}_timeout`)), timeoutMs); }),
    ]);
  } finally { clearTimeout(timer); }
}

export function persistAuditReport(file, report) {
  const complete = report.loopCompleted === true && report.results.length === report.expectedDenominator && !report.fatalError;
  const value = {...report, complete, denominator:report.results.length,
    incomplete:report.results.filter(row => row.status === 'capture_incomplete').length};
  fs.writeFileSync(file + '.tmp', JSON.stringify(value, null, 2) + '\n');
  fs.renameSync(file + '.tmp', file);
  return value;
}
