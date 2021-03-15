import './Reservations.scss';
import Burger from '../components/Burger';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import { Helmet } from 'react-helmet';

export default function Reservations(props) {

  let content = {
    English: {
      seoTitle: "River Tubing",
      description: "inflated tubes location to do river floating in Outaouais"
    },
    French: {
      seoTitle: "Descente de rivière sur tube",
      description: "Location de tubes gonflables pour faire une descente de rivière"
    }
  }
 
  props.language === "English" ? (content = content.English) : (content = content.French);


  return (
    <div id="reservation">
      <Helmet>
          <meta name="description" content={content.description}></meta>
          <title>{content.seoTitle}</title>
        </Helmet>
      <h2 className="title">Réservations</h2>
    </div>
  )
}