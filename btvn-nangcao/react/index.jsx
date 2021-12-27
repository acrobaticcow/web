const app = document.getElementById("app");

const TextMarkUp = (props) => {
  return (
    <p
      style={{
        textAlign: "center",
        textTransform: "capitalize",
        margin: "0px 6px",
        marginBottom: "10px",
      }}
    >
      <a href={props.link}>{props.text}</a>
    </p>
  );
};

function Picture(props) {
  return (
    <div className="img-wrapper">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

const Title = (props) => {
  return (
    <h1
      style={{
        fontSize: "1rem",
        color: "rgba(0,0,0,.54)",
        fontWeight: "500",
        padding:"20px",
        textTransform: "uppercase",
        borderBottom:"1px solid #dadada",
        margin:"0"
      }}
    >
      {props.name}
    </h1>
  );
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maleFashion: {
        text: "Thời trang nam",
        photo: "asset/photo-shoppee/male-tshirt.png",
        link: "https://shopee.vn/Th%E1%BB%9Di-Trang-Nam-cat.11035567",
      },
      mobi: {
        text: "Điện thoại & phụ kiện",
        photo: "asset/photo-shoppee/phone.png",
        link: "https://shopee.vn/%C4%90i%E1%BB%87n-Tho%E1%BA%A1i-Ph%E1%BB%A5-Ki%E1%BB%87n-cat.11036030",
      },
      tech: {
        text: "Thiết bị điện tử",
        photo: "asset/photo-shoppee/screen.png",
        link: "https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-T%E1%BB%AD-cat.11036132",
      },
      laptop: {
        text: "Máy tính & Laptop",
        photo: "asset/photo-shoppee/laptop.png",
        link: "https://shopee.vn/M%C3%A1y-T%C3%ADnh-Laptop-cat.11035954",
      },
      camera: {
        text: "Máy Ảnh & Máy Quay Phim",
        photo: "asset/photo-shoppee/camera.png",
        link: "https://shopee.vn/M%C3%A1y-%E1%BA%A2nh-M%C3%A1y-Quay-Phim-cat.11036101",
      },
      watch: {
        text: "Đồng hồ",
        photo: "asset/photo-shoppee/male-watch.png",
        link: "https://shopee.vn/%C4%90%E1%BB%93ng-H%E1%BB%93-cat.11035788",
      },
      maleShoe: {
        text: "giày dép nam",
        photo: "asset/photo-shoppee/maleshoe.png",
        link: "https://shopee.vn/Gi%C3%A0y-D%C3%A9p-Nam-cat.11035801",
      },
      houseAppliances: {
        text: "Thiết bị điện gia dụng",
        photo: "asset/photo-shoppee/kettle.png",
        link: "https://shopee.vn/Thi%E1%BA%BFt-B%E1%BB%8B-%C4%90i%E1%BB%87n-Gia-D%E1%BB%A5ng-cat.11036971",
      },
      sport: {
        text: "Thể thao & du lịch",
        photo: "asset/photo-shoppee/football.png",
        link: "https://shopee.vn/Th%E1%BB%83-Thao-Du-L%E1%BB%8Bch-cat.11035478",
      },
      vehicle: {
        text: "Ô tô & xe máy & xe đạp",
        photo: "asset/photo-shoppee/motorbike.png",
        link: "https://shopee.vn/%C3%94-T%C3%B4-Xe-M%C3%A1y-Xe-%C4%90%E1%BA%A1p-cat.11036793",
      },
      femFashion: {
        text: "Thời trang nữ",
        photo: "asset/photo-shoppee/fem-skirt.png",
        link: "https://shopee.vn/Th%E1%BB%9Di-Trang-N%E1%BB%AF-cat.11035639",
      },
      baby: {
        text: "Mẹ & bé",
        photo: "asset/photo-shoppee/baby-seat.png",
        link: "https://shopee.vn/M%E1%BA%B9-B%C3%A9-cat.11036194",
      },
      lifeStyle: {
        text: "nhà cửa & đời sống",
        photo: "asset/photo-shoppee/pot.png",
        link: "https://shopee.vn/Nh%C3%A0-C%E1%BB%ADa-%C4%90%E1%BB%9Di-S%E1%BB%91ng-cat.11036670",
      },
      beauty: {
        text: "Sắc đẹp",
        photo: "asset/photo-shoppee/makeup.png",
        link: "https://shopee.vn/S%E1%BA%AFc-%C4%90%E1%BA%B9p-cat.11036279",
      },
      health: {
        text: "sức khỏe",
        photo: "asset/photo-shoppee/sanitizer.png",
        link: "https://shopee.vn/S%E1%BB%A9c-Kh%E1%BB%8Fe-cat.11036345",
      },
      femShoe: {
        text: "giày nữ",
        photo: "asset/photo-shoppee/heel.png",
        link: "https://shopee.vn/Gi%C3%A0y-D%C3%A9p-N%E1%BB%AF-cat.11035825",
      },
      femBag: {
        text: "túi ví nữ",
        photo: "asset/photo-shoppee/bag.png",
        link: "https://shopee.vn/T%C3%BAi-V%C3%AD-N%E1%BB%AF-cat.11035761",
      },
      femAccs: {
        text: "phụ kiện & trang sức nữ",
        photo: "asset/photo-shoppee/belt.png",
        link: "https://shopee.vn/T%C3%BAi-V%C3%AD-N%E1%BB%AF-cat.11035761",
      },
      grocery: {
        text: "bách hóa online",
        photo: "asset/photo-shoppee/choco.png",
        link: "https://shopee.vn/B%C3%A1ch-H%C3%B3a-Online-cat.11036525",
      },
      bookStore: {
        text: "Nhà sách online",
        photo: "asset/photo-shoppee/book.png",
        link: "https://shopee.vn/Nh%C3%A0-S%C3%A1ch-Online-cat.11036863",
      },
    };
  }
  render() {
    return (
      <div className="app">
          <Title name = "danh mục"/>
        <div className="list">
          <div className="component">
            <Picture src={this.state.maleFashion.photo} />
            <TextMarkUp
              link={this.state.maleFashion.link}
              text={this.state.maleFashion.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.mobi.photo} />
            <TextMarkUp
              link={this.state.mobi.link}
              text={this.state.mobi.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.tech.photo} />
            <TextMarkUp
              link={this.state.tech.link}
              text={this.state.tech.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.laptop.photo} />
            <TextMarkUp
              link={this.state.laptop.link}
              text={this.state.laptop.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.camera.photo} />
            <TextMarkUp
              link={this.state.camera.link}
              text={this.state.camera.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.watch.photo} />
            <TextMarkUp
              link={this.state.watch.link}
              text={this.state.watch.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.maleShoe.photo} />
            <TextMarkUp
              link={this.state.maleShoe.link}
              text={this.state.maleShoe.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.houseAppliances.photo} />
            <TextMarkUp
              link={this.state.houseAppliances.link}
              text={this.state.houseAppliances.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.sport.photo} />
            <TextMarkUp
              link={this.state.sport.link}
              text={this.state.sport.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.vehicle.photo} />
            <TextMarkUp
              link={this.state.vehicle.link}
              text={this.state.vehicle.text}
            />
          </div>
        </div>
        <div className="list">
          <div className="component">
            <Picture src={this.state.femFashion.photo} />
            <TextMarkUp
              link={this.state.femFashion.link}
              text={this.state.femFashion.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.baby.photo} />
            <TextMarkUp
              link={this.state.baby.link}
              text={this.state.baby.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.lifeStyle.photo} />
            <TextMarkUp
              link={this.state.lifeStyle.link}
              text={this.state.lifeStyle.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.beauty.photo} />
            <TextMarkUp
              link={this.state.beauty.link}
              text={this.state.beauty.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.health.photo} />
            <TextMarkUp
              link={this.state.health.link}
              text={this.state.health.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.femShoe.photo} />
            <TextMarkUp
              link={this.state.femShoe.link}
              text={this.state.femShoe.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.femBag.photo} />
            <TextMarkUp
              link={this.state.femBag.link}
              text={this.state.femBag.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.femAccs.photo} />
            <TextMarkUp
              link={this.state.femAccs.link}
              text={this.state.femAccs.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.grocery.photo} />
            <TextMarkUp
              link={this.state.grocery.link}
              text={this.state.grocery.text}
            />
          </div>
          <div className="component">
            <Picture src={this.state.bookStore.photo} />
            <TextMarkUp
              link={this.state.bookStore.link}
              text={this.state.bookStore.text}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<List />, app);
