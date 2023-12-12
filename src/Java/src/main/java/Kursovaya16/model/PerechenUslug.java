package Kursovaya16.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya16.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПереченьУслуг
 */
@Entity(name = "IISKursovaya16ПереченьУслуг")
@Table(schema = "public", name = "ПереченьУслуг")
public class PerechenUslug {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Наименование")
    private String наименование;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Empty")
    @Convert("Empty")
    @Column(name = "ЗатрВремя", length = 16, unique = true, nullable = false)
    private UUID _emptyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Empty", insertable = false, updatable = false)
    private ZatrVremya empty;


    public PerechenUslug() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }


}