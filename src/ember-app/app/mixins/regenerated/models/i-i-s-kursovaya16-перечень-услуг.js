import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  empty: DS.belongsTo('i-i-s-kursovaya16-затр-время', { inverse: null, async: false })
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-kursovaya16-перечень-услуг.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  empty: {
    descriptionKey: 'models.i-i-s-kursovaya16-перечень-услуг.validations.empty.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПереченьУслугE', 'i-i-s-kursovaya16-перечень-услуг', {
    наименование: attr('Наименование', { index: 0 }),
    empty: belongsTo('i-i-s-kursovaya16-затр-время', 'Empty', {
      время: attr('Время', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'время' })
  });

  modelClass.defineProjection('ПереченьУслугL', 'i-i-s-kursovaya16-перечень-услуг', {
    наименование: attr('Наименование', { index: 0 }),
    empty: belongsTo('i-i-s-kursovaya16-затр-время', 'Время', {
      время: attr('Время', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
