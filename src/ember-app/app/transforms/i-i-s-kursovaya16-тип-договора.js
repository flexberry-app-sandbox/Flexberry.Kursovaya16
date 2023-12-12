import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипДоговораEnum from '../enums/i-i-s-kursovaya16-тип-договора';

export default FlexberryEnum.extend({
  enum: ТипДоговораEnum,
  sourceType: 'IIS.Kursovaya16.ТипДоговора'
});
