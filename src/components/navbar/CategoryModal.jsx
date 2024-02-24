import Modal from "react-bootstrap/Modal";
import styles from "./CategoryModal.module.css";
function CategoryModal({ isHovering, setIsHovering }) {
  const modalItems = [
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/collections/dropdown-TWS_100x.png?v=1684827062",
      name: "True Wireless Bluetooth",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/collections/Nirvana-ION-Black-_-1_-1.1_100x.png?v=1699269477",
      name: "Personalized Product",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/collections/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_100x.png?v=1684828287",
      name: "Neckbands",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/collections/smartwatches_100x.png?v=1684827668",
      name: "Smart Watches",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/collections/Rectangle271_100x.png?v=1701414051",
      name: "Wireless Headphones",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/collections/box-5_100x.png?v=1684827751",
      name: "Wireless Speakers",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/collections/wiredheadphones_100x.webp?v=1705400196",
      name: "Wired Headphones",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/collections/Charger_100x.png?v=1684828017",
      name: "Chargers",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/collections/powerbank_100x.png?v=1684828045",
      name: "Power Banks",
    },
    {
      img: "https://www.boat-lifestyle.com/cdn/shop/collections/Immortal_category_Image_100x.png?v=1684827903",
      name: "Gaming Headphones",
    },
  ];
  return (
    <>
      {isHovering && (
        <Modal
          show={isHovering}
          onHide={() => setIsHovering(false)}
          dialogClassName={`modal-90w ${styles.modalWidth}`}
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header>
            {/* <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <table>
              <tbody className="d-flex flex-wrap justify-content-between gap-2">
                {modalItems.map((item) => {
                  return (
                    <tr key={item.name}>
                      <div className={styles.item}>
                        <td>
                          <img
                            className={`${styles.modalImg}`}
                            src={item.img}
                            alt="Item_image"
                          />
                        </td>
                        <td className={styles.modalName}>{item.name}</td>
                      </div>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default CategoryModal;
