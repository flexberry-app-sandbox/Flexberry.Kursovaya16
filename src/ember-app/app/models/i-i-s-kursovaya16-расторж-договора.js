import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as РасторжДоговораMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya16-расторж-договора';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(РасторжДоговораMixin, Validations, {
});

defineProjections(Model);

export default Model;
