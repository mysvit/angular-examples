export interface HttpLogMessage {
    msgType: MessageType
    msgText: string
}

export enum MessageType {
    Info,
    Error
}
