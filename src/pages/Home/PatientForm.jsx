import Input from './Input';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const PatientForm = ({
  onAdding,
  onSave,
  isAdding,
  onPatientChange,
  Patient,
  // onSave,
  onUpdate,
  setPatient,
  IsSaving,
  isUpdating,
  onCancel,
}) => {
  const handleOnSaveClick = () => {
    onSave();
    onAdding(true);
  };

  return (
    <div className='mb-5 patient-form-wrapper container text-center col-md-6'>
      {!isAdding && (
        <Button
          className='mb-3'
          onClick={() => onAdding(true)}
          variant='primary'
        >
          Create Patient
        </Button>
      )}
      {isAdding && (
        <div className='patient-form'>
          <form action=''>
            {/* <Input
            setPatientState={onPatientChange}
            type={'number'}
            name={'pid'}
            placeholder={'Patient ID'}
            value={Patient.pid}
          /> */}
            <Input
              setPatientState={onPatientChange}
              type={'text'}
              name={'name'}
              placeholder={'Patient Name'}
              inputValue={Patient.name}
            />
            <Input
              setPatientState={onPatientChange}
              type={'text'}
              name={'phone'}
              placeholder={'Patient Number'}
              inputValue={Patient.phone}
            />
            <Input
              setPatientState={onPatientChange}
              type={'email'}
              name={'email'}
              placeholder={'Patient Email'}
              inputValue={Patient.email}
            />
          </form>
          {IsSaving && (
            <button
              onClick={handleOnSaveClick}
              className='btn btn-success mx-1'
            >
              Save
            </button>
          )}
          {isUpdating && (
            <button
              onClick={() => onUpdate()}
              className='btn btn-secondary mx-1'
            >
              Update
            </button>
          )}
          <button onClick={onCancel} className='btn btn-warning mx-1'>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default PatientForm;
