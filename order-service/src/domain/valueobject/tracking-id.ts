import { BaseId, generateEntityId } from "@fos/common";

export class TrackingId extends BaseId<string> {
    constructor(id: string) {
        super(id)
    }
}

export function generateTrackingId() {
    return generateEntityId('TRK')
}