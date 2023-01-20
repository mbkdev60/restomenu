import React from "react";

interface IProps {
  facturation: any;
  className?: string;
}
const panier = (props: IProps) => {
  const facturation = ["7 €", "3 €", "Abonnez-vous!!!"];
  return (
    <div className={props.className}>
      <h2>Panier</h2>
      <p>{facturation[props.facturation]}</p>
    </div>
  );
};

export default panier;
