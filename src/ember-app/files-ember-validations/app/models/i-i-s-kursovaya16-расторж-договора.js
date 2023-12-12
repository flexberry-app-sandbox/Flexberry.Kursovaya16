import {
  defineNamespace,
  defineProjections,
  Model as РасторжДоговораMixin
} from '../mixins/regenerated/models/i-i-s-kursovaya16-расторж-договора';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасторжДоговораMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
