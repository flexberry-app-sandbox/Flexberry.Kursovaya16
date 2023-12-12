import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗаключДоговораMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya16-заключ-договора';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗаключДоговораMixin, Validations, {
});

defineProjections(Model);

export default Model;
