export interface InteractionModel {
    id: number;
    name: string;
    isEdit: boolean
}

export const interactionList: Array<InteractionModel> = [
    <InteractionModel>{id: 1, name: 'Service'},
    <InteractionModel>{id: 2, name: 'Input/Output'},
    <InteractionModel>{id: 3, name: 'ViewChild'},
];
