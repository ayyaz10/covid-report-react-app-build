import { FaEdit, FaTrash } from 'react-icons/fa';

const PatientsList = ({
  Patients,
  Patient,
  onEdit,
  onDelete,
  onUpdating,
  onSaving,
  isDisabled,
  setisAdding,
}) => {
  const borderClass = 'edit-border';
  const handleEdit = (id) => {
    onEdit(id);
    onSaving(false);
    onUpdating(true);
    setisAdding(true);
  };

  return (
    <>
      <div className='col-md-12 container'>
        <table className='table table-stripe'>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Phone</td>
              <td>Email</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {Patients.map((p, i) => (
              <tr key={i} className={Patient.id === p.id ? borderClass : null}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.phone}</td>
                <td>{p.email}</td>
                <td>
                  <button
                    onClick={() => handleEdit(p.id)}
                    className='btn btn-primary'
                  >
                    <FaEdit />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => onDelete(p.id)}
                    className='btn btn-danger'
                    disabled={Patient.id === p.id ? isDisabled : null}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PatientsList;
