import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import CardWrapper from "../../components/CardWrapper";
import NavbarWrapper from "../../components/NavbarWrapper";

const Home = () => {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/profile/${id}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(page);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${currentPage}`
        );
        setData(response.data.data);
        setTotalPages(response.data.total_pages);
        console.log("total halaman", response.data.total_pages);
        console.log(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [currentPage]);
  return (
    <>
      <NavbarWrapper />
      <div className="container ">
        <div className="row">
          {data?.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <CardWrapper
                avatar={item.avatar}
                first_name={item.first_name}
                last_name={item.last_name}
                email={item.email}
                onClick={() => handleClick(item.id)}
              />
            </div>
          ))}
        </div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <Button
              key={page}
              variant="primary"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          )
        )}
      </div>
    </>
  );
};

export default Home;
