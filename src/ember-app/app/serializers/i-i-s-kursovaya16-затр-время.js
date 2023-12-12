import { Serializer as ЗатрВремяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya16-затр-время';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗатрВремяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
