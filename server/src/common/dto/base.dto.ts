export class BaseDto<SpecificDto> {
  constructor(data: Partial<SpecificDto> | undefined) {
    data && Object.assign(this, data);
  }
}
