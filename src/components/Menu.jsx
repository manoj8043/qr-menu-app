import React from "react";

const menuData = {
  Starters: [
    { name: "Chicken Lollipop", price: "₹220" },
    { name: "Paneer Tikka", price: "₹180" },
    { name: "Veg Manchurian", price: "₹160" },
  ],
  Chinese: [
    { name: "Chicken Noodles", price: "₹150" },
    { name: "Veg Fried Rice", price: "₹120" },
    { name: "Gobi Manchurian", price: "₹130" },
  ],
  Juices: [
    { name: "Mango Juice", price: "₹60" },
    { name: "Watermelon Juice", price: "₹50" },
    { name: "Lime Soda", price: "₹40" },
  ],
  Biryanis: {
    Chicken: [
      { name: "Chicken Biryani", price: "₹200" },
      { name: "Chicken 65 Biryani", price: "₹220" },
    ],
    Fish: [{ name: "Fish Biryani", price: "₹250" }],
    Mutton: [{ name: "Mutton Biryani", price: "₹280" }],
    Paneer: [{ name: "Paneer Biryani", price: "₹190" }],
    Veg: [{ name: "Veg Biryani", price: "₹150" }],
  },
  Rotis: [
    { name: "Butter Naan", price: "₹40" },
    { name: "Tandoori Roti", price: "₹30" },
    { name: "Plain Paratha", price: "₹35" },
  ],
  Curries: [
    { name: "Paneer Butter Masala", price: "₹160" },
    { name: "Chicken Afghani", price: "₹200" },
    { name: "Kadai Veg", price: "₹140" },
  ],
};

const Section = ({ title, items }) => (
  <div style={styles.section}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    {Array.isArray(items)
      ? items.map((item, idx) => (
          <div key={idx} style={styles.item}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))
      : Object.keys(items).map((sub, idx) => (
          <div key={idx} style={{ marginBottom: "10px" }}>
            <h3 style={styles.subTitle}>{sub}</h3>
            {items[sub].map((item, subIdx) => (
              <div key={subIdx} style={styles.item}>
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}
          </div>
        ))}
  </div>
);

export default function Menu() {
  return (
    <div style={styles.menuContainer}>
      <h1 style={styles.menuTitle}>Menu</h1>
      {Object.entries(menuData).map(([section, items], idx) => (
        <Section key={idx} title={section} items={items} />
      ))}
    </div>
  );
}

const styles = {
  menuContainer: {
    backgroundColor: "#800000",
    color: "#FFD700",
    padding: "40px",
    fontFamily: "serif",
    minHeight: "100vh",
    backgroundImage:
      "radial-gradient(circle, rgba(255,215,0,0.05) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  },
  menuTitle: {
    fontSize: "48px",
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "bold",
    letterSpacing: "2px",
    textTransform: "uppercase",
    borderBottom: "2px solid #FFD700",
    paddingBottom: "10px",
  },
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    fontSize: "28px",
    borderBottom: "1px solid #FFD700",
    paddingBottom: "5px",
    marginBottom: "15px",
  },
  subTitle: {
    fontSize: "22px",
    marginTop: "10px",
    marginBottom: "5px",
    textDecoration: "underline",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "6px 0",
    fontSize: "18px",
    borderBottom: "0.5px dashed #FFD700",
  },
};
