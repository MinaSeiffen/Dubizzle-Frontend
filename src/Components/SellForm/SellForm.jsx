import { useEffect, useState } from "react";
import { BreadCrumb } from "../BreadCrumb/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useMenuSelectionContext } from "../../Context/MenuSelectionContext";
import usePostProduct from "../../Hooks/usePostProduct";

const SellForm = () => {
  const { selectedCategory, selectedSubCategory } = useMenuSelectionContext();
  const [negotiable, setNegotiable] = useState(false);
  const [exchange, setExchange] = useState(false);
  const [free, setFree] = useState(false);
  const [duplex, setDuplex] = useState(false);
  const [townHouse, setTownHouse] = useState(false);
  const [standAlone, setStandAlone] = useState(false);
  const [balcony, setBalcony] = useState(false);
  const [kitchen, setKitchen] = useState(false);
  const [garden, setGarden] = useState(false);
  const [security, setSecurity] = useState(false);
  const [images, setImages] = useState([]);
  const [contactMethod, setContactMethod] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isDropdownLocation, setisDropdownLocation] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [priceType, setPriceType] = useState("");
  const [isproperty, setIsProperty] = useState(false);
  const [isVehicle, setIsVehicle] = useState(false);
  const [brands, setBrands] = useState([]);
  const [isPhone, setIsPhone] = useState(false);
  const [propertyType, setPropertyType] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
    images: [],
    location: "",
    price_type: "",
    subCategoryId: "",
    contact_type: "",
    brand: "",
    model: "",
    area: "",
    bedRooms: "",
    bathRooms: "",
    phoneNumber: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const imageHandler = async (e, index) => {
    const files = e.target.files;
    const formData = new FormData();
  
    for (let i = 0; i < Math.min(files.length, 5); i++) {
      formData.append("images", files[i]);
    }
  
    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        const imageUrls = data.image_urls; 
        setImages((prevImages) => {
          const updatedImages = [...prevImages];
          updatedImages[index] = imageUrls;
          return updatedImages.flat();
        });
      } else {
        console.error("Error uploading images:", response.status);
      }
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  
  
  

  const toggleDropdownLocation = (e) => {
    e.preventDefault();
    setisDropdownLocation((prevState) => !prevState);
  };

  const dropdownItems = [
    "Cairo",
    "Alexandria",
    "Asuit",
    "Aswan",
    "Qena",
    "Sohag",
  ];

  const handleNegotiableChange = () => {
    setNegotiable(true);
    setExchange(false);
    setFree(false);
    setPriceType("negotiable");
  };

  const handleExchangeChange = () => {
    setNegotiable(false);
    setExchange(true);
    setFree(false);
    setPriceType("exchange");
  };

  const handleFreeChange = () => {
    setNegotiable(false);
    setExchange(false);
    setFree(true);
    setPriceType("free");
  };

  const handleDuplex = () => {
    setDuplex(true);
    setTownHouse(false);
    setStandAlone(false);
    setPropertyType("Duplex");
  };

  const handleTownHouse = () => {
    setDuplex(false);
    setTownHouse(true);
    setStandAlone(false);
    setPropertyType("Town House");
  };

  const handleStandAlone = () => {
    setDuplex(false);
    setTownHouse(false);
    setStandAlone(true);
    setPropertyType("Stand Alone");
  };

  const handleBalcony = (event) => {
    setBalcony(event.target.checked);
    if (event.target.checked) {
      setAmenities((prevAmenities) => [...prevAmenities, "balcony"]);
    } else {
      setAmenities((prevAmenities) =>
        prevAmenities.filter((amenity) => amenity !== "balcony")
      );
    }
  };

  const handlekitchen = (event) => {
    setKitchen(event.target.checked);
    if (event.target.checked) {
      setAmenities((prevAmenities) => [
        ...prevAmenities,
        "Built in Kitchen Appliances",
      ]);
    } else {
      setAmenities((prevAmenities) =>
        prevAmenities.filter(
          (amenity) => amenity !== "Built in Kitchen Appliances"
        )
      );
    }
  };
  const handleSecurity = (event) => {
    setSecurity(event.target.checked);
    if (event.target.checked) {
      setAmenities((prevAmenities) => [...prevAmenities, "security"]);
    } else {
      setAmenities((prevAmenities) =>
        prevAmenities.filter((amenity) => amenity !== "security")
      );
    }
  };
  const handleGarden = (event) => {
    setGarden(event.target.checked);
    if (event.target.checked) {
      setAmenities((prevAmenities) => [...prevAmenities, "private garden"]);
    } else {
      setAmenities((prevAmenities) =>
        prevAmenities.filter((amenity) => amenity !== "private garden")
      );
    }
  };

  const handleContactMethodChange = (method) => {
    if (method === "phone") {
      setContactMethod("phone");
      setIsPhone(true);
    } else if (method === "chat") {
      setContactMethod("chat");
      setIsPhone(false);
    } else if (method === "both") {
      setContactMethod("both");
      setIsPhone(true);
    }
  };

  const handleDropdownItemClick = (selectedItem, e) => {
    e.preventDefault();
    setSelectedLocation(selectedItem);
    setProductDetails((prevState) => ({
      ...prevState,
      location: selectedItem,
    }));
    setisDropdownLocation(false);
  };

  const { addProduct } = usePostProduct();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let product = {
      ...productDetails,
      price_type: priceType,
      propertyType: propertyType,
      contact_type: contactMethod,
      amenities: amenities,
      images: images,
      brand: selectedBrand?.value,
    };
    addProduct(product, selectedSubCategory);
    console.log(product);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const handlePageRefresh = () => {
      if (performance.navigation.type === 1) {
        navigate("/sell");
      }
    };
    window.addEventListener("load", handlePageRefresh);

    const isPropertySelected = async () => {
      if (selectedCategory == "Properties") {
        setIsProperty(true);
      }
    };
    const isVehicleSelected = async () => {
      if (selectedCategory == "Vehicles") {
        setIsVehicle(true);
        setBrands([
          { value: "Mercedes-Benz", label: "Mercedes-Benz" },
          { value: "Hyundai", label: "Hyundai" },
          { value: "BMW", label: "BMW" },
          { value: "Audi", label: "Audi" },
          { value: "BYD", label: "BYD" },
          { value: "Chevrolet", label: "Chevrolet" },
          { value: "Daewoo", label: "Daewoo" },
          { value: "Peugeot", label: "Peugeot" },
          { value: "Bentley", label: "Bentley" },
          { value: "Toyota", label: "Toyota" },
          { value: "Tesla", label: "Tesla" },
        ]);
      }
    };

    const isMobileSelected = async () => {
      setBrands([
        { value: "Apple", label: "Apple" },
        { value: "Samsung", label: "Samsung" },
        { value: "Other", label: "Other" },
      ]);
    };
    isMobileSelected();
    isVehicleSelected();
    isPropertySelected();
    return () => window.removeEventListener("load", handlePageRefresh);
  }, [setIsProperty, selectedCategory, navigate, productDetails]);

  return (
    <>
      <h1 className="font-semibold py-4 text-3xl mx-auto flex justify-center">
        Post AD
      </h1>
      <div className="container mx-auto border p-1">
        <div className="flex items-center">
          <BreadCrumb />
          <Link to={"/sell"}>
            <span className="text-black ml-auto underline relative right-16">
              Change
            </span>
          </Link>
          <hr className="w-fit" />
        </div>
        <hr className="w-full mb-2" />
        <div className="mx-20">
          <h1 className="font-semibold text-2xl mb-4">Includes Some Details</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="productName" className="text-md block mb-1">
                AD Title:
              </label>
              <input
                type="text"
                id="productName"
                value={productDetails.name}
                onChange={changeHandler}
                name="name"
                className="w-full border rounded px-3 py-2"
                required
              />
              <p className="text-sm text-black font-normal">
                Please, Mention the key features of your item
              </p>
            </div>
            {!isproperty && (
              <div className="mb-4">
                <label htmlFor="brand" className="block mb-1">
                  Brand:
                </label>
                <Select
                  options={brands}
                  value={selectedBrand}
                  onChange={(selectedOption) =>
                    setSelectedBrand(selectedOption)
                  }
                  placeholder="Select a brand"
                  isSearchable
                  className="w-full bg-gray-50 border"
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      borderColor: state.isFocused
                        ? "black"
                        : provided.borderColor,
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isHovered
                        ? "red-200"
                        : provided.backgroundColor,
                      color: "black",
                    }),
                  }}
                  required
                />
              </div>
            )}
            {isVehicle && (
              <div className="mb-4">
                <label className="block mb-1">Model:</label>
                <input
                  type="text"
                  name="model"
                  value={productDetails.model}
                  onChange={changeHandler}
                  className="border px-3 py-2 w-full rounded"
                  required
                />
                <p>
                  Please,Write specific model of your item such as (C180 or E200
                  ... etc )
                </p>
              </div>
            )}
            {isproperty && (
              <div className="mb-4">
                <label className="text-md mb-1">Property Type:</label>
                <div className="mb-4 flex gap-5 m-3">
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={duplex}
                      onChange={handleDuplex}
                      className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                    />
                    <label className="mx-3 relative top-1">Duplex</label>
                  </div>
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={standAlone}
                      onChange={handleStandAlone}
                      className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                    />
                    <label className="mx-3 relative top-1">Stand Alone</label>
                  </div>
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={townHouse}
                      onChange={handleTownHouse}
                      className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500"
                    />
                    <label className="mx-3 relative top-1">Town House</label>
                  </div>
                </div>
              </div>
            )}
            {isproperty && (
              <div className="mb-4">
                <label>
                  Area (m<span className="relative text-sm bottom-1">2</span>):
                </label>
                <input
                  type="text"
                  name="area"
                  value={productDetails.area}
                  onChange={changeHandler}
                  className="w-full border rounded px-3 py-2 mt-3"
                />
              </div>
            )}

            {isproperty && (
              <div>
                <label className="block mb-1">Amenities:</label>
                <div className="mb-4 flex gap-5 m-3">
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={balcony}
                      onChange={handleBalcony}
                      className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                    />
                    <label htmlFor="negotiable" className="mx-3 relative top-1">
                      Balcony
                    </label>
                  </div>
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      id="exchange"
                      checked={kitchen}
                      onChange={handlekitchen}
                      className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                    />
                    <label htmlFor="exchange" className="mx-3 relative top-1">
                      Built in Kitchen Appliances
                    </label>
                  </div>
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      id="free"
                      checked={garden}
                      onChange={handleGarden}
                      className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500"
                    />
                    <label htmlFor="free" className="mx-3 relative top-1">
                      Private Garden
                    </label>
                  </div>
                  <div className="p-2 border w-fit flex justify-center items-center">
                    <input
                      type="checkbox"
                      id="free"
                      checked={security}
                      onChange={handleSecurity}
                      className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500"
                    />
                    <label htmlFor="free" className="mx-3 relative top-1">
                      Security
                    </label>
                  </div>
                </div>
              </div>
            )}

            {isproperty && (
              <div className="mb-4">
                <div className="mb-4">
                  <label>Bedrooms:</label>
                  <input
                    type="text"
                    name="bedRooms"
                    value={productDetails.bedRooms}
                    onChange={changeHandler}
                    className="w-full border rounded px-3 py-2 mt-3"
                  />
                </div>
                <div className="mb-4">
                  <label>Bathrooms:</label>
                  <input
                    type="text"
                    name="bathRooms"
                    value={productDetails.bathRooms}
                    onChange={changeHandler}
                    className="w-full border rounded px-3 py-2 mt-3"
                  />
                </div>
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="description" className="block mb-1">
                Description:
              </label>
              <textarea
                id="description"
                value={productDetails.description}
                onChange={changeHandler}
                name="description"
                className="w-full border rounded px-3 py-2"
                rows="4"
                required
              ></textarea>
              <p className="text-sm">
                Please,Include condition, features and reason for selling
              </p>
            </div>
            <hr className="w-full" />

            <div className="relative mb-4">
              <label
                htmlFor="price"
                className="block mb-7 mt-5 text-2xl font-bold"
              >
                Set a Price:
              </label>
              <label className="block mb-2">Price:</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 pointer-events-none">
                  EGP
                </span>
                <input
                  type="text"
                  id="price"
                  value={productDetails.price}
                  onChange={changeHandler}
                  name="price"
                  className="pl-16 w-full border rounded px-3 py-2"
                  required
                />
              </div>
            </div>

            <div className="mb-6 flex gap-5 max-md:flex-col">
              <div className="p-2 border w-fit flex justify-center items-center">
                <input
                  type="checkbox"
                  id="negotiable"
                  checked={negotiable}
                  onChange={handleNegotiableChange}
                  className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                />
                <label htmlFor="negotiable" className="mx-3 relative top-1">
                  Negotiable
                </label>
              </div>
              {!isproperty && !isVehicle && (
                <div className="p-2 border w-fit flex justify-center items-center">
                  <input
                    type="checkbox"
                    id="exchange"
                    checked={exchange}
                    onChange={handleExchangeChange}
                    className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                  />
                  <label htmlFor="exchange" className="mx-3 relative top-1">
                    Exchange
                  </label>
                </div>
              )}
              {!isproperty && !isVehicle && (
                <div className="p-2 borde w-fit flex justify-center items-center">
                  <input
                    type="checkbox"
                    id="free"
                    checked={free}
                    onChange={handleFreeChange}
                    className="circle bg-white appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500"
                  />
                  <label htmlFor="free" className="mx-3 relative top-1">
                    Free
                  </label>
                </div>
              )}
            </div>
            <hr className="mb-3 w-full" />

            <div className="add-product-itemfield flex flex-col">
              <label className="text-2xl font-bold mb-5">
                Upload Up to 5 Photos
              </label>
              <div className="flex gap-4 w-fit max-lg:flex-col">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    className="relative justify-center items-center "
                  >
                    {images[index] && (
                      <img
                        src={images[index]}
                        className="w-40 h-36 object-cover my-4"
                        alt=""
                      />
                    )}
                    <input
                      onChange={(e) => imageHandler(e, index)}
                      type="file"
                      name={`image-${index}`}
                      id={`file-input-${index}`}
                      multiple={false}
                      className="hidden"
                    />
                    <label
                      htmlFor={`file-input-${index}`}
                      className="flex bottom-0 w-fit justify-center items-center bg-green-500 text-white px-4 py-2 text-center cursor-pointer rounded-md"
                    >
                      {images[index] ? "Change Image" : "Upload Image"}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <hr className="w-full mt-3" />
            <div className="mb-6 w-fit">
              <label
                htmlFor="location"
                className="block mb-6 mt-5 text-2xl font-bold"
              >
                Location:
              </label>
              <div className="relative border flex justify-between z-50 p-4">
                <button
                  onClick={toggleDropdownLocation}
                  type="button"
                  className="text-gray-500 flex justify-between group items-center rounded-md bg-white text-base font-medium hover:text-gray-900"
                  aria-expanded={isDropdownLocation}
                >
                  <span className="text-red-600 font-semibold">
                    <FontAwesomeIcon icon={faLocationDot} />{" "}
                    {selectedLocation || "Select Location"}
                  </span>
                  <svg
                    className={`text-black ml-2 h-5 w-5 group-hover:text-black ${
                      isDropdownLocation
                        ? "rotate-180 duration-500"
                        : "duration-500"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownLocation && (
                  <div className="dropdown-menu absolute top-full mt-1 border rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="relative grid w-64 sm:gap-8 sm:p-8">
                      {dropdownItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="-m-3 flex items-start rounded-lg hover:bg-gray-50"
                          onClick={(e) => handleDropdownItemClick(item, e)}
                        >
                          <div className="ml-4">
                            <p className="text-base font-medium text-red-600">
                              <FontAwesomeIcon icon={faLocationDot} /> {item}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <div className="mt-2 gap-5 flex max-md:flex-col">
                <label className="text-lg">Contact Type:</label>
                <div className="flex justify-center items-center w-fit border">
                  <input
                    type="checkbox"
                    id="phone"
                    value="phone"
                    checked={contactMethod.includes("phone")}
                    onChange={() => handleContactMethodChange("phone")}
                    className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                  />
                  <label htmlFor="phone" className="mx-3 relative top-1">
                    Phone
                  </label>
                </div>
                <div className="flex justify-center items-center w-fit border">
                  <input
                    type="checkbox"
                    id="chat"
                    value="chat"
                    checked={contactMethod.includes("chat")}
                    onChange={() => handleContactMethodChange("chat")}
                    className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                  />
                  <label htmlFor="chat" className="mx-3 relative top-1">
                    Chat
                  </label>
                </div>
                <div className="flex justify-center items-center w-fit border">
                  <input
                    type="checkbox"
                    id="both"
                    value="both"
                    checked={contactMethod.includes("both")}
                    onChange={() => handleContactMethodChange("both")}
                    className="circle appearance-none border border-black rounded-full w-4 h-4 checked:bg-red-500 checked:border-transparent"
                  />
                  <label htmlFor="both" className="mx-3 relative top-1">
                    Both
                  </label>
                </div>
              </div>
              {isPhone && (
                <input
                  type="text"
                  name="phoneNumber"
                  value={productDetails.phoneNumber}
                  onChange={changeHandler}
                  placeholder="Phone Number"
                  className="border rounded px-3 py-2 w-full mt-3"
                />
              )}
            </div>
            <button
              type="submit"
              className="bg-red-600 font-bold mt-3 text-white px-6 py-2 rounded-lg"
            >
              Post Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SellForm;
