export type FormulaText = {en:string;ru:string};
const b=(en:string,ru:string):FormulaText=>({en,ru});
export type FormulaTeaching={id:string;title:FormulaText;formula:FormulaText;symbols:FormulaText;meaning:FormulaText;example:FormulaText;condition:FormulaText;matches:string[]};
export const f=(id:string,titleEn:string,titleRu:string,formulaEn:string,formulaRu:string,symbolsEn:string,symbolsRu:string,meaningEn:string,meaningRu:string,exampleEn:string,exampleRu:string,conditionEn:string,conditionRu:string,...matches:string[]):FormulaTeaching=>({id,title:b(titleEn,titleRu),formula:b(formulaEn,formulaRu),symbols:b(symbolsEn,symbolsRu),meaning:b(meaningEn,meaningRu),example:b(exampleEn,exampleRu),condition:b(conditionEn,conditionRu),matches});
