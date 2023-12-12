import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонсульт: DS.attr('number'),
  дата: DS.attr('date'),
  номер: DS.attr('number'),
  предостУслуга: DS.attr('i-i-s-kursovaya16-услуга'),
  empty: DS.belongsTo('i-i-s-kursovaya16-перечень-услуг', { inverse: null, async: false }),
  заключДоговора: DS.belongsTo('i-i-s-kursovaya16-заключ-договора', { inverse: null, async: false }),
  расчетОстВрем: DS.belongsTo('i-i-s-kursovaya16-расчет-ост-врем', { inverse: 'оказКонсульт', async: false })
});

export let ValidationRules = {
  времяКонсульт: {
    descriptionKey: 'models.i-i-s-kursovaya16-оказ-консульт.validations.времяКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya16-оказ-консульт.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-kursovaya16-оказ-консульт.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  предостУслуга: {
    descriptionKey: 'models.i-i-s-kursovaya16-оказ-консульт.validations.предостУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  empty: {
    descriptionKey: 'models.i-i-s-kursovaya16-оказ-консульт.validations.empty.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заключДоговора: {
    descriptionKey: 'models.i-i-s-kursovaya16-оказ-консульт.validations.заключДоговора.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.i-i-s-kursovaya16-оказ-консульт.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказКонсультE', 'i-i-s-kursovaya16-оказ-консульт', {
    заключДоговора: belongsTo('i-i-s-kursovaya16-заключ-договора', '', {
      номер: attr('', { index: 0 })
    }, { index: -1, hidden: true }),
    дата: attr('Дата', { index: 1 }),
    времяКонсульт: attr('Время консульт', { index: 2 }),
    предостУслуга: attr('Предост услуга', { index: 3 })
  });
};
