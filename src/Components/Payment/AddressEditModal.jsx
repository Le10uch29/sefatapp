import React, { useState } from "react";
import styles from "./AddressEditModal.module.scss";
import TextInput from "../ui/Input/TextInput";
import EditIcon from "@/assets/svg/EditIcon";
import Button from "../ui/Button/Button";

const AddressEditModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    city: "",
    district: "",
    street: "",
    apartment: "",
    note: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.header}>
          <h2>Güvənli ödəniş</h2>
          <button onClick={onClose} className={styles.closeButton}>×</button>
        </div>
        <div className={styles.modalHeader}>
          <h3>Çatdırılma ünvanını düzəlt</h3>
          <EditIcon/>
        </div>
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <TextInput
            label="Şəhər:"
            placeholder="Bakı"
            value={formData.city}
            onChange={handleInputChange}
            name="city"
          />
          <TextInput
            label="Rayon:"
            placeholder="Nəsimi"
            value={formData.district}
            onChange={handleInputChange}
            name="district"
          />
          <TextInput
            label="Küçə:"
            placeholder="H.Cavid"
            value={formData.street}
            onChange={handleInputChange}
            name="street"
          />
          <TextInput
            label="Mənzil:"
            placeholder="3-cü mərtəbə"
            value={formData.apartment}
            onChange={handleInputChange}
            name="apartment"
          />
          <TextInput
            label="Qeyd:"
            placeholder="Şəxsi özümə təslim edilsin"
            value={formData.note}
            onChange={handleInputChange}
            name="note"
            isTextarea={true}
          />
          <Button text="Dəvam et" className={styles.saveButton}/>
        </form>
      </div>
    </div>
  );
};

export default AddressEditModal;
