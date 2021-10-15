export enum OutboundMessageType {
  STOP = 'stop',
}

export enum InboundMessageType {
  UPDATE = 'update',
  METADATA = 'meta',
}

interface UpdatePayload {
  step: number;
  maxStep: number;
}

interface MetaPayload {
  algo: string;
}

export interface UpdateMessage {
  type: InboundMessageType.UPDATE;
  mainPayload: Point[];
  auxPayload: UpdatePayload;
}

export interface MetadataMessage {
  type: InboundMessageType.METADATA;
  mainPayload: Metadata[];
  auxPayload: MetaPayload;
}

export type Message = UpdateMessage | MetadataMessage;

// [x, y] or [x, y, z].
export type Point = [number, number] | [number, number, number];

// Metadata for each embedding point. It is static across dim reduction step.
export interface Metadata {
  label: string;
  // Data URI.
  imageLabel?: string;
  color: number;
}
