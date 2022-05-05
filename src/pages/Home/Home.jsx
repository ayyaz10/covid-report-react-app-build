import PatientForm from './PatientForm';
import PatientsList from './PatientsList';
// import PatientsReport from './PatientsReport';
import { getData, sendData, updateData, deleteData } from '../../service/http';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import RepeatableTableRows from '../common/RepeatAbleTableRows';

const Home = () => {
  const [PageTitle, setPageTitle] = useState('Covid Reports');
  const [isAdding, setisAdding] = useState(false);
  const [isPopulating, setisPopulating] = useState(false);
  const [Patient, setPatient] = useState({});
  const [Patients, setPatients] = useState([]);
  const [IsSaving, setIsSaving] = useState(true);
  const [IsUpdating, setIsUpdating] = useState(false);
  const [isContentReady, setisContentReady] = useState(false);
  const [isDisabled, setisDisabled] = useState(false);

  useEffect(() => {
    handleReceive();
  }, []);

  const handleValidation = () => {
    return !Patient.name || !Patient.phone || !Patient.email;
  };
  const setError = (message) => {
    toast.error(message);
  };

  const cancelSave = (params) => {
    setisAdding(false);
    resetPatient();
  };
  const cancelUpdate = (params) => {
    // setisAdding(false);
    setIsSaving(true);
    setIsUpdating(false);
    resetPatient();
  };
  const handlePatientChange = (e) => {
    const p = { ...Patient };
    p[e.target.name] = e.target.value;
    setPatient(p);
  };

  const handleReceive = async () => {
    const patients = await getData();
    // console.log(patients);

    setPatients(patients.data.patients);
  };

  const resetPatient = () => {
    const p = { name: '', phone: '', email: '' };
    setPatient(p);
  };

  const handleSave = async () => {
    if (handleValidation()) {
      return setError('Please fill the form fields.');
    } else {
      const response = await sendData(Patient);
      if (response.data.isSuccess) {
        const resolvePromise = new Promise((resolve, reject) => {
          getData().then((res) => {
            if (res.data.isSuccess) {
              resetPatient();
              setTimeout(() => {
                resolve();
                handleReceive();
              }, 1000);
            } else {
              reject();
            }
          });
        });
        toast.promise(resolvePromise, {
          pending: 'Please wait',
          success: 'Report Saved',
          error: 'Something went wrong',
        });
      } else {
        toast.error('Something went wrong. Please try again.');
        resetPatient();
      }
    }

    // console.log(Patient.name);
    // if(response.data.)
    // const p = [Patient, ...Patients];
    // console.log(p);
    // setisPopulating(true);
    // setPatients(p);
  };
  const handleEdit = (pid) => {
    const p = Patients.find((p) => p.id === pid);
    setPatient(p);
  };

  const handleUpdate = async () => {
    try {
      if (handleValidation()) {
        setError('Please fill the form fields.');
      } else {
        const singlePatient = Patients.find((p) => p.id === Patient.id);
        setPatient(singlePatient);
        const index = Patients.indexOf(singlePatient);
        const pts = [...Patients];
        pts[index] = Patient;
        // const response = await /// working
        const resolvePromise = new Promise((resolve, reject) => {
          updateData(singlePatient.id, Patient).then((res) => {
            if (res.data.isSuccess) {
              resetPatient();
              setTimeout(() => {
                resolve();
                setPatients(pts);
                setIsSaving(true);
                setIsUpdating(false);
              }, 800);
            } else {
              reject();
              toast.error('Something went wrong. Please try again');
            }
          });
        });
        toast.promise(resolvePromise, {
          pending: 'Please wait',
          success: 'Report Updated',
          error: 'Something went wrong',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (pid) => {
    const p = Patients.filter((p) => p.id !== pid);
    // getting single patient to disable current row delete button
    const singlePatient = Patients.find((p) => p.id === pid);
    setPatient(singlePatient);
    setisDisabled(true);
    const resolvePromise = new Promise((resolve, reject) => {
      deleteData(pid).then((res) => {
        if (res.data.isSuccess) {
          resetPatient();
          setTimeout(() => {
            resolve();
            setPatients(p);
            setisDisabled(false);
          }, 800);
        } else {
          reject();
          toast.error('Something went wrong. Please try again');
        }
      });
    });
    toast.promise(resolvePromise, {
      pending: 'Please wait',
      success: 'Report Deleted',
      error: 'Something went wrong',
    });
    // const response = await deleteData(pid);
  };

  const initialRender = () => {
    const randomNumber = Math.floor(Math.random() * 2 + 1);
    setTimeout(() => {
      setisContentReady(true);
    }, `${randomNumber}000`);
  };
  initialRender();

  return (
    <div>
      <Toaster />
      <h1 className='py-4 text-center'>{PageTitle}</h1>
      <PatientForm
        onSave={handleSave}
        onPatientChange={handlePatientChange}
        onAdding={setisAdding}
        isAdding={isAdding}
        Patient={Patient}
        setPatient={setPatient}
        IsSaving={IsSaving}
        onSaving={setIsSaving}
        // IsUpdating ? onSaveCancel={cancelSave}: onUpdateCancel={cancelUpdate}
        onCancel={IsUpdating ? cancelUpdate : cancelSave}
        onUpdate={handleUpdate}
        isUpdating={IsUpdating}
        // onUpdating={setIsUpdating}
      />
      <hr />
      <h2 className='py-3 text-center'>Patients List</h2>
      {isContentReady ? (
        Patients.length > 0 ? (
          <div className='row g-5  text-center'>
            <PatientsList
              Patients={Patients}
              Patient={Patient}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onSaving={setIsSaving}
              onUpdating={setIsUpdating}
              isDisabled={isDisabled}
              setisAdding={setisAdding}
            />
          </div>
        ) : (
          <p className='text-muted py-3'>Patient List is empty</p>
        )
      ) : (
        <RepeatableTableRows />
      )}
    </div>
  );
};

export default Home;
