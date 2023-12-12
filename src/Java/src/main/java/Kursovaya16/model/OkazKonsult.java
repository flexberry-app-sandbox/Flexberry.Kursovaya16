package Kursovaya16.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya16.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ОказКонсульт
 */
@Entity(name = "IISKursovaya16ОказКонсульт")
@Table(schema = "public", name = "ОказКонсульт")
public class OkazKonsult {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ВремяКонсульт")
    private Integer времяконсульт;

    @Column(name = "ПредостУслуга")
    private String предостуслуга;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Empty")
    @Convert("Empty")
    @Column(name = "ПереченьУслуг", length = 16, unique = true, nullable = false)
    private UUID _emptyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Empty", insertable = false, updatable = false)
    private PerechenUslug empty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ZaklyuchDogovora")
    @Convert("ZaklyuchDogovora")
    @Column(name = "ЗаключДоговора", length = 16, unique = true, nullable = false)
    private UUID _zaklyuchdogovoraid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ZaklyuchDogovora", insertable = false, updatable = false)
    private ZaklyuchDogovora zaklyuchdogovora;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RaschetOstVrem")
    @Convert("RaschetOstVrem")
    @Column(name = "РасчетОстВрем", length = 16, unique = true, nullable = false)
    private UUID _raschetostvremid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RaschetOstVrem", insertable = false, updatable = false)
    private RaschetOstVrem raschetostvrem;


    public OkazKonsult() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getВремяКонсульт() {
      return времяконсульт;
    }

    public void setВремяКонсульт(Integer времяконсульт) {
      this.времяконсульт = времяконсульт;
    }

    public String getПредостУслуга() {
      return предостуслуга;
    }

    public void setПредостУслуга(String предостуслуга) {
      this.предостуслуга = предостуслуга;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}