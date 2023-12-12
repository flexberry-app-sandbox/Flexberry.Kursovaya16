package Kursovaya16.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya16.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: РасторжДоговора
 */
@Entity(name = "IISKursovaya16РасторжДоговора")
@Table(schema = "public", name = "РасторжДоговора")
public class RastorzhDogovora {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Статус")
    private String статус;

    @Column(name = "Номер")
    private Integer номер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Empty")
    @Convert("Empty")
    @Column(name = "ЗаключДоговора", length = 16, unique = true, nullable = false)
    private UUID _emptyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Empty", insertable = false, updatable = false)
    private ZaklyuchDogovora empty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DirOtdPoRabSKl")
    @Convert("DirOtdPoRabSKl")
    @Column(name = "ДирОтдПоРабСКл", length = 16, unique = true, nullable = false)
    private UUID _dirotdporabsklid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DirOtdPoRabSKl", insertable = false, updatable = false)
    private DirOtdPoRabSKl dirotdporabskl;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;


    public RastorzhDogovora() {
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

    public String getСтатус() {
      return статус;
    }

    public void setСтатус(String статус) {
      this.статус = статус;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }


}