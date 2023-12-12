import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусEnum from '../enums/i-i-s-kursovaya16-статус';

export default FlexberryEnum.extend({
  enum: СтатусEnum,
  sourceType: 'IIS.Kursovaya16.Статус'
});
