import {
  defineNamespace,
  defineProjections,
  Model as ЗаключДоговораMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya16-заключ-договора';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗаключДоговораMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
