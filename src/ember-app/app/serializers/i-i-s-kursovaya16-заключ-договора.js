import { Serializer as ЗаключДоговораSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya16-заключ-договора';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗаключДоговораSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
