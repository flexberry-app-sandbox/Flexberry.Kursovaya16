import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УслугаEnum from '../enums/i-i-s-kursovaya16-услуга';

export default FlexberryEnum.extend({
  enum: УслугаEnum,
  sourceType: 'IIS.Kursovaya16.Услуга'
});
