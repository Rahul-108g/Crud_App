const Modal = ({ showFun, item }) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container ">
        <div className="container d-flex justify-content-center align-item-center ">
          <div className="card ">
            <div className="card-body text-center toc">
              <h2 className="card-title">{item.name}</h2>

              <h3 className="card-title">{item.email}</h3>
              <h4 className="card-title">{item.age}</h4>
              <p className="card-text">{item.gender}</p>
              <button onClick={showFun} className="btn btn-primary">
                cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
