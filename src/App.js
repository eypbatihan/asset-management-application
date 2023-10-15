import { useEffect, useRef, useState } from "react";
import "./App.css";
import DataTable from "react-data-table-component";
import logo from "./assets/mintus-250-×-250px.png";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function App() {
  const MySwal = withReactContent(Swal);
  let modalRef = useRef();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("mintus-data")) || [
      {
        id: 1,
        name: "Çiçek Resmi 1",
        addition_date: "13.10.2023 10:30",
        description: "Renkli çiçek resmi.",
        img: "https://www.cercevelet.com/thumbnail?image=uploads/images/201804/renkli-cicek-buketi-5982.jpg&auto=450x450&imagick=true",
        type: "pictorial art",
      },
      {
        id: 2,
        name: "Heykel 1",
        addition_date: "13.10.2023 11:45",
        description: "Ahşap heykel.",
        img: "https://www.sanatgezgini.com/media/catalog/product/cache/1/thumbnail/600x800/9df78eab33525d08d6e5fb8d27136e95/e/k/ekran_al_nt_s_.jpg",
        type: "sculpture art",
      },
      {
        id: 3,
        name: "Sokak Graffiti 1",
        addition_date: "13.10.2023 13:15",
        description: "Sokak sanatı grafitisi.",
        img: "https://oitheblog.com/wp-content/uploads/2016/02/IMG_0554.jpg",
        type: "pictorial art",
      },
      {
        id: 4,
        name: "Dijital Sanat Çalışması 1",
        addition_date: "14.10.2023 14:20",
        description: "RGB renkleri kullanılarak dijital sanat çalışması.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1g35CGvKzzV5kY5qwpdwr3st7DYyik1H1wNA09md0HGWjl4a86K6F36YNCivw3H9IGA&usqp=CAU",
        type: "pictorial art",
      },
      {
        id: 5,
        name: "Mermer Heykel 1",
        addition_date: "14.10.2023 16:10",
        description: "Mermerden yapılmış bir heykel.",
        img: "https://www.futbolarena.com/imagesYUK/201904/b/mermer_bronz_ya_da_kilden_yapilan_heykellere_ne_isim_verilir_ronesans_donemi_heykelleri_hadi_ipucu_cevabi_1_nisaneQ.jpg",
        type: "sculpture art",
      },
      {
        id: 6,
        name: "Manzara Resmi 1",
        addition_date: "15.10.2023 10:30",
        description: "Doğa manzarası resmi.",
        img: "https://www.arttablo.com/upload/U-orman-nehri-doga-manzarasi-8-yagli-boya-sanat-kanvas-tablo1470647143-800.jpg",
        type: "pictorial art",
      },
      {
        id: 7,
        name: "Heykel 2",
        addition_date: "15.10.2023 11:45",
        description: "Bronz heykel.",
        img: "https://sc04.alicdn.com/kf/HTB1jEaSklDH8KJjy1zeq6xjepXa6.jpg",
        type: "sculpture art",
      },
      {
        id: 8,
        name: "Sokak Graffiti 2",
        addition_date: "16.10.2023 13:15",
        description: "Sokak sanatı grafitisi.",
        img: "https://gazetekadikoy.com.tr/Uploads/gazetekadikoy.com.tr/haberler/200495576246311-img.jpg",
        type: "pictorial art",
      },
      {
        id: 9,
        name: "Dijital Sanat Çalışması 2",
        addition_date: "16.10.2023 14:20",
        description: "Dijital sanat çalışması.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPizyvg4FELma1xK0Tybp0NLv7daa9KkSEB4Oxk6ZxKUT6581bipqROCgKLhe9krnGaSY&usqp=CAU",
        type: "pictorial art",
      },
      {
        id: 10,
        name: "Mermer Heykel 2",
        addition_date: "17.10.2023 16:10",
        description: "Mermerden yapılmış bir heykel.",
        img: "https://miro.medium.com/v2/resize:fit:1200/1*8yv12s-MEaK2d5DdiTpDIQ.jpeg",
        type: "sculpture art",
      },
      {
        id: 11,
        name: "Çiçek Resmi 2",
        addition_date: "18.10.2023 10:30",
        description: "Renkli çiçek resmi.",
        img: "https://www.cercevelet.com/thumbnail?image=uploads/images/201804/rengarenk-cicekler-5989.jpg&auto=800x800",
        type: "pictorial art",
      },
      {
        id: 12,
        name: "Heykel 3",
        addition_date: "18.10.2023 11:45",
        description: "Marmara heykel.",
        img: "https://d35fbhjemrkr2a.cloudfront.net/Images/Shop/70/Product/12967/400/f0de403858cc435da111a7d2783c3c50.jpg",
        type: "sculpture art",
      },
      {
        id: 13,
        name: "Sokak Graffiti 3",
        addition_date: "19.10.2023 13:15",
        description: "Sokak sanatı grafitisi.",
        img: "https://bayaiyi.com/wp-content/uploads/2017/02/yeldegirmeni-15.jpg",
        type: "pictorial art",
      },
      {
        id: 14,
        name: "Dijital Sanat Çalışması 3",
        addition_date: "19.10.2023 14:20",
        description: "Dijital sanat çalışması.",
        img: "https://www.leblebitozu.com/wp-content/uploads/2021/09/Alberto-Seveso.jpg",
        type: "pictorial art",
      },
      {
        id: 15,
        name: "Mermer Heykel 3",
        addition_date: "20.10.2023 16:10",
        description: "Mermerden yapılmış bir heykel.",
        img: "https://www.gramerstones.com/wp-content/uploads/2022/10/granit-bC3BCst.jpg",
        type: "sculpture art",
      },
      {
        id: 16,
        name: "Manzara Resmi 2",
        addition_date: "21.10.2023 10:30",
        description: "Dağ manzarası resmi.",
        img: "https://www.arttablo.com/upload/U-eugenio-amus-dag-doga-manzarasi-yagli-boya-klasik-sanat-kanvas-tablo1466511282-800.jpg",
        type: "pictorial art",
      },
      {
        id: 17,
        name: "Heykel 4",
        addition_date: "21.10.2023 11:45",
        description: "Ahşap heykel.",
        img: "https://productimages.hepsiburada.net/s/145/375-375/110000100233265.jpg",
        type: "sculpture art",
      },
      {
        id: 18,
        name: "Sokak Graffiti 4",
        addition_date: "22.10.2023 13:15",
        description: "Sokak sanatı grafitisi.",
        img: "https://ajansgiller.com/wp-content/uploads/2022/08/c4d07e9aa7cd29ceceee647a5019522c.jpg",
        type: "pictorial art",
      },
      {
        id: 19,
        name: "Dijital Sanat Çalışması 4",
        addition_date: "22.10.2023 14:20",
        description: "Dijital sanat çalışması.",
        img: "https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2018/02/dijital-sanat.jpg",
        type: "pictorial art",
      },
      {
        id: 20,
        name: "Mermer Heykel 5",
        addition_date: "23.10.2023 16:10",
        description: "Mermerden yapılmış bir heykel.",
        img: "https://aktuelarkeoloji.com.tr/uploads/images/thumbs/1200X826-d43e2ab0eeb7fd0148d4a046035d1659.png",
        type: "sculpture art",
      },
      {
        id: 21,
        name: "Mermer Heykel 7",
        addition_date: "20.10.2023 16:10",
        description: "Mermerden yapılmış bir heykel.",
        img: "https://aktuelarkeoloji.com.tr/uploads/images/e4444188eda1abe8bd4492addc088e68.jpg",
        type: "sculpture art",
      },
      {
        id: 22,
        name: "Manzara Resmi 3",
        addition_date: "21.10.2023 10:30",
        description: "Dağ manzarası resmi.",
        img: "https://www.arttablo.com/upload/U-orman-nehri-doga-manzarasi-8-yagli-boya-sanat-kanvas-tablo1470647143-800.jpg",
        type: "pictorial art",
      },
      {
        id: 23,
        name: "Heykel 6",
        addition_date: "21.10.2023 11:45",
        description: "Ahşap heykel.",
        img: "https://www.sanatgezgini.com/media/catalog/product/cache/1/thumbnail/600x800/9df78eab33525d08d6e5fb8d27136e95/e/k/ekran_al_nt_s_ggg.jpg",
        type: "sculpture art",
      },
      {
        id: 24,
        name: "Sokak Graffiti 5",
        addition_date: "22.10.2023 13:15",
        description: "Sokak sanatı grafitisi.",
        img: "https://oitheblog.com/wp-content/uploads/2016/02/SAM_6126.png",
        type: "pictorial art",
      },
      {
        id: 25,
        name: "Dijital Sanat Çalışması 5",
        addition_date: "22.10.2023 14:20",
        description: "Dijital sanat çalışması.",
        img: "https://www.leblebitozu.com/wp-content/uploads/2021/09/Pete-Harrison-2.png",
        type: "pictorial art",
      },
    ]
  );
  const [art, setArt] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [modal, setModal] = useState("");
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      width: "auto",
      wrap: true,
    },
    {
      name: "Type",
      selector: (row) => row.type,
      sortable: true,
      width: "20%",
      wrap: true,
      hide:"sm",
    },
    {
      name: "Addition Date",
      selector: (row) => row.addition_date,
      sortable: true,
      width: "20%",
      wrap: true,
      hide:"sm",
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
      width: "auto",
      wrap: true,
      hide:"sm",
    },
    {
      name: "",
      cell: (row) => (
        <div className="d-flex">
          <button
            className="btn btn-outline-success btn-xs me-1"
            id={"btn-view-"+row.id}
            onClick={() => {
              setArt(row);
              setModal("view");
            }}
          >
            VIEW
          </button>
          <button
            className="btn btn-xs btn-outline-danger"
            id={"btn-delete-"+row.id}
            onClick={() => {
              setArt(row);
              setModal("delete");
            }}
          >
            DELETE
          </button>
        </div>
      ),
      width: "11.5rem",
    },
  ];

  // modal function
  useEffect(() => {
    let handler = (e) => {
      if (modal !== "") {
        if (!modalRef.current.contains(e.target)) {
          setModal("");
        }
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  // data create fuction
  const post = (e) => {
    e.preventDefault();
    const newData = {
      id: Date.now(), // unic id => milliseconds of the current time
      name,
      type,
      img,
      description,
      addition_date: new Date().toLocaleString().slice(0, 16), // current time
    };
    setData([...data, newData]);
    MySwal.fire({
      customClass: "alert-body",
      position: "center",
      icon: "success",
      title:
        "Your art was created successfully." /**-------"Sanatınız başarıyla oluşturuldu."----*/,
      showConfirmButton: true,
      showCloseButton: true,
      confirmButtonColor: "#0097a7",
    }).then((willDelete) => {
      if (willDelete) {
        statedelete();
        localStorage.setItem("mintus-data", JSON.stringify([...data, newData]));
      }
    });
  };

  //data delete function
  const postDelete = (id) => {
    setData(data.filter((obj) => obj.id !== id));
    MySwal.fire({
      customClass: "alert-body",
      position: "center",
      icon: "success",
      title:
        "Your art was deleted successfully." /**-------"Sanat eseriniz başarıyla silindi."----*/,
      showConfirmButton: true,
      showCloseButton: true,
      confirmButtonColor: "#0097a7",
    }).then((willDelete) => {
      if (willDelete) {
        statedelete();
        localStorage.setItem(
          "mintus-data",
          JSON.stringify(data.filter((obj) => obj.id !== id))
        );
      }
    });
  };

  //state clear function
  const statedelete = () => {
    setModal("");
    setName("");
    setDescription("");
    setType("");
    setImg("");
    setArt("");
  };

  return (
    <div className="App m-3">
      <div>
        {/* HEADER */}
        <div className=" p-2 col-12 d-flex justify-content-center align-items-center text-center">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div
              className="col-12 rounded-2 p-2"
              style={{
                boxShadow: "1px 1px 2px 2px  rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="d-flex justify-content-between align-items-end">
                <div className=" me-2">
                  <img src={logo} alt="logo" width={100} />
                </div>

                <div className="col-8 ">
                  <dl className="row mb-0">
                    <h6 className="col-3">
                      Total Art Count : <span className="text-secondary" id="total-count">{data.length}</span>{" "}
                    </h6>
                    <h6 className="col-3">
                      Pictorial Art Count :{" "}
                      <span className="text-secondary">
                        {
                          data.filter((obj) => obj.type === "pictorial art")
                            .length
                        }
                      </span>
                    </h6>
                    <h6 className="col-3">
                      Sculpture Art Count :{" "}
                      <span className="text-secondary">
                        {
                          data.filter((obj) => obj.type === "sculpture art")
                            .length
                        }
                      </span>
                    </h6>
                  </dl>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-success px-4 me-4"
                    id="btn-art-add"
                    onClick={() => setModal("add")}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* DATA TABLE */}
        <div
          className="rounded-2 p-2 m-2 mb-5"
          style={{
            boxShadow: "1px 1px 2px 2px  rgba(0, 0, 0, 0.15)",
          }}
        >
          {data && (
            <DataTable
              title=""
              columns={columns}
              data={data}
              pagination
              highlightOnHover
              pointerOnHover
              expandableRows={false}
              paginationPerPage={20}
              paginationRowsPerPageOptions={[20, 50]}
              noDataComponent="There are no records to display."
            />
          )}
        </div>
        {/* Data Create Modal */}
        {modal === "add" ? (
          <div
            className="modal fade show animate-bottom position-fixed"
            style={{
              display: "block",
              backdropFilter: "brightness(50%)",
              overflow: "auto",
            }}
            id="add-data-modal"
            tabIndex="-1"
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              ref={modalRef}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create Art</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={statedelete}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="basic-form">
                    <form>
                      <label htmlFor="artName" className="form-label ">
                        Name *
                      </label>
                      <br />
                      <input
                        type="text"
                        id="artName"
                        className="form-control mb-3"
                        placeholder="Name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="artType" className="form-label">
                        Type *
                      </label>
                      <br />
                      <div className="input-group mb-3">
                        <select
                          className="default-select form-control wide"
                          value={type}
                          required
                          id="artType"
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option value="" disabled>
                            Please Select Type *
                          </option>
                          <option value="pictorial art">Pictorial Art</option>
                          <option value="sculpture art">Sculpture Art</option>
                        </select>
                      </div>
                      <label htmlFor="artLink" className="form-label ">
                        Image Link (Optional)
                      </label>
                      <br />
                      <input
                        type="text"
                        id="artLink"
                        className="form-control mb-3"
                        placeholder="Image Link"
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                      />
                      <label
                        htmlFor="artDescription"
                        className="col-sm-3 col-form-label"
                      >
                        Description *
                      </label>
                      <br />
                      <textarea
                        className="form-control pt-2 mb-3"
                        rows={4}
                        id="artDescription"
                        placeholder="Description"
                        style={{ minHeight: "5rem" }}
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-outline-danger light"
                          id="btn-art-add-cancel"
                          onClick={statedelete}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-outline-success"
                          id="btn-art-add-save"
                          onClick={(e) =>
                            name && type && description && post(e)
                          }
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
         {/* Data Delete Modal */}
        {modal === "delete" ? (
          <div
            className="modal fade show animate-bottom position-fixed"
            style={{
              display: "block",
              backdropFilter: "brightness(50%)",
              overflow: "auto",
            }}
            id="delete-data-modal"
            tabIndex="-1"
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              ref={modalRef}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Delete Art</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={statedelete}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="basic-form">
                    <form>
                      <label className=" col-form-label mycolor">
                      Do you really want to delete <strong> {art.name} </strong>?
                      </label>
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-danger mypagebtn"
                    id="btn-art-delete-cancel"
                    onClick={statedelete}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    id="btn-art-delete-confirm"
                    onClick={() => postDelete(art.id)}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
         {/* Data Detail Modal */}
        {modal === "view" ? (
          <div
            className="modal fade show animate-bottom position-fixed"
            style={{
              display: "block",
              backdropFilter: "brightness(50%)",
              overflow: "auto",
            }}
            id="view-data-modal"
            tabIndex="-1"
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              ref={modalRef}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Detail Art</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={statedelete}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="card">
                    <div className="card-body">
                      <div className="text-center">
                        <div>
                          <img
                            src={art?.img || logo}
                            alt="art"
                            width={300}
                          />
                        </div>
                        <h4 className="mt-3 font-w600 text-black mb-2">
                          {art?.name}
                        </h4>
                        <div className="row text-start">
                          <dt className=" mt-3 fs-16 col-6">
                            <span className="text-secondary ">
                              Addition Date :
                            </span>
                          </dt>
                          <dd className=" mt-3 fs-16 col-4">
                            <span className="">{art?.addition_date}</span>
                          </dd>
                        </div>
                        <div className="row text-start">
                          <dt className="mb-2 mt-3 fs-16 col-6">
                            <span className="text-secondary ">Type :</span>
                          </dt>
                          <dd className="mb-2 mt-3 fs-16 col-4">
                            <span className="">{art?.type}</span>
                          </dd>
                        </div>
                        <div className="row text-start">
                          <dt className="mb-2 mt-3 fs-16 col-6">
                            <span className="text-secondary ">
                              Description :
                            </span>
                          </dt>
                          <dd className="mb-2 mt-3 fs-16 col-4">
                            <span className="">{art?.description}</span>
                          </dd>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    id="btn-art-view-close"
                    onClick={statedelete}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
