export interface InteractionModel {
    id: number
    name?: string
}

// UI model for Service interaction
export class InteractionSRV implements InteractionModel {
    id!: number
    name?: string
    isEdit?: boolean
    isDelete?: boolean
}

// UI model for Input Output interaction
export class InteractionIO implements InteractionModel {
    id!: number
    name?: string
    isAdd?: boolean
    isEdit?: boolean
    isDelete?: boolean
    isCancel?: boolean
}

// UI model for View Child interaction
export class InteractionVC implements InteractionModel {
    id!: number
    name?: string
    isEdit?: boolean
    isDelete?: boolean
}

export const interactionList: Array<InteractionSRV | InteractionIO> = [
    <InteractionModel>{id: 0, name: 'Service'},
    <InteractionModel>{id: 1, name: 'Input/Output'},
    <InteractionModel>{id: 2, name: 'ViewChild'},
];
