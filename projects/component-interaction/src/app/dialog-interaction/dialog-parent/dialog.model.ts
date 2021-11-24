import {InteractionModel} from '../../interaction.model'

export interface DialogData {
    dialogType: DialogType
    item: InteractionModel
}

export enum DialogType {
    New,
    Edit,
    Delete
}
