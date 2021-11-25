export interface InteractionModel {
    id: number
    name?: string
}

// UI model for Dialog interaction
export class InteractionDlg implements InteractionModel {
    id!: number
    name?: string
}

// UI model for Service interaction
export class InteractionSRV implements InteractionModel {
    id!: number
    name?: string
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

export const interactionList: Array<InteractionModel> = [
    <InteractionModel>{id: 0, name: 'Dialog'},
    <InteractionModel>{id: 1, name: 'Service'},
    <InteractionModel>{id: 2, name: 'Input/Output'},
    <InteractionModel>{id: 3, name: 'ViewChild'},
];

export enum ModificationType {
    New,
    Edit,
    Delete
}
