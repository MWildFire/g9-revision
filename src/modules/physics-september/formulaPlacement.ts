// Formula cards belong to the section that uses them, not to the end of a whole lesson.
export const atomicFormulaPlacement:Record<string,Record<number,string[]>>={
 'atomic-structure':{1:['nanometre'],2:['charge'],3:['photon']},
 'isotopes':{0:['nucleons']},
 'radiation':{0:['decay'],1:['nuclear-equation'],3:['activity']},
 'nuclear-equations':{0:['nuclear-equation']},
 'half-life':{1:['decay'],2:['activity']},
 'contamination':{2:['dose']},
 'background':{2:['activity'],3:['dose']},
 'half-life-choice':{1:['activity-decay']},
 'uses':{2:['absorption']},
 'fission':{1:['nuclear-equation'],4:['fission-power','efficiency']},
 'fusion':{0:['nuclear-equation'],2:['mass-energy']},
};
export function atomicFormulaIds(lesson:string,index?:number){const placement=atomicFormulaPlacement[lesson]??{};return index===undefined?[...new Set(Object.values(placement).flat())]:placement[index]??[];}
