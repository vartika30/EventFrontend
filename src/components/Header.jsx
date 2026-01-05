const Header = ({ search, setSearch }) => {
  return (
    <header className="header my-3">
      <div className="row pt-3 ">
       <div className="col-md-6">
       <h4 className="text-start text-danger"><i>meetup</i></h4>
      </div> 
      <div className="col-md-6">
<input
      className="form-control "
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
</div>
      </div>
    < hr /> 
     
    </header>
  );
};

export default Header;