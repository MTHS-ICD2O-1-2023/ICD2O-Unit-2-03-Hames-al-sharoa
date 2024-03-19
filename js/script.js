// Copyright (c) 2024 hames.al-sharoa All rights reserved
//
// Created by: hames.al-sharoa
// Created on: Mar 2024
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const streetname = document.getElementById("street-name").value
  const streetnumber = parseInt(document.getElementById("age-entered").value)

  // output
  document.getElementById("user-info").innerHTML =
    "Your info is: " + street+ ", number " + adrees + "."
}
