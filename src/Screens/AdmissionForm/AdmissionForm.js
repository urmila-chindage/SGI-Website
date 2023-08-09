import React, { useState } from 'react';
import "./AdmissionForm.css";
import Profile from "../../Images/profileimage.jpg";
import Main from "../../ReusableComponents/JS/Main";
import { Table, TableCell, TableContainer, TableRow, TableBody } from "@material-ui/core";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdmissionForm = () => {
  const [profile, setProfile] = useState(Profile);
  const [studGender, setStudGender] = useState("Male");
  const [selectedBranchOption, setSelectedBranchOption] = useState("");
  const [selectedCategoryOption, setSelectedCategoryOption] = useState("");
  const [selectedMinority, setSelectedMinority] = useState("");
  const [selectedDisability, setSelectedDisability] = useState("");
  const [selectedDefence, setSelectedDefence] = useState("");

  const [studCArea, setStudCArea] = useState("");
  const [studPArea, setStudPArea] = useState("");

  const [SscYear, setSscYear] = useState("")
  const [SscMarkObt, setSscMarkObt] = useState("")
  const [SscMark, setSscMark] = useState("")
const [SscPercent, setSscPercent] = useState("")

  const [HscYear, setHscYear] = useState("")
  const [HscMarkObt, setHscMarkObt] = useState("")
  const [HscMark, setHscMark] = useState("")
  const [HscPercent, setHscPercent] = useState("")

  const [DipYear, setDipYear] = useState("")
  const [DipMarkObt, setDipMarkObt] = useState("")
  const [DipMark, setDipMark] = useState('')
  const [DipPercent, setDipPercent] = useState("")

  const [CetRollNo, setCetRollNo] = useState("")
  const [CetYear, setCetYear] = useState("")
  const [CetMathScr, setCetMathScr] = useState("")
  const [CetPhyScr, setCetPhyScr] = useState("")
  const [CetChemScr, setCetChemScr] = useState('')
  const [CetTotal, setCetTotal] = useState("")

  const [JeeRollNo, setJeeRollNo] = useState("")
  const [JeeYear, setJeeYear] = useState("")
  const [JeeMathScr, setJeeMathScr] = useState("")
  const [JeePhyScr, setJeePhyScr] = useState("")
  const [JeeChemScr, setJeeChemScr] = useState("")
  const [JeeTotal, setJeeTotal] = useState("")

  const [AdmissionLetter, setAdmissionLetter] = useState(false)
  const [SscMarkSheet, setSscMarkSheet] = useState(false)
  const [HscMarkSheet, setHscMarkSheet] = useState(false)
  const [CetMarkSheet, setCetMarkSheet] = useState(false)
  const [JeeMarkSheet, setJeeMarkSheet] = useState(false)
  const [DiplomaMarkSheet, setDiplomaMarkSheet] = useState(false)
  const [LCTC, setLCTC] = useState(false)
  const [Domicile, setDomicile] = useState(false)
  const [GapCerti, setGapCerti] = useState(false)
  const [CastCerti, setCastCerti] = useState(false)
  const [CastVali, setCastVali] = useState(false)
  const [NonCreamy, setNonCreamy] = useState(false)
  const [IncomeCerti, setIncomeCerti] = useState(false)
  const [DefenceCerti, setDefenceCerti] = useState(false)
  const [PhysicalDisCerti, setPhysicalDisCerti] = useState(false)
  const [AdharX, setAdharX] = useState(false)

  const [Remark, setRemark] = useState('')

  const [agreeStudent, setAgreeStudent] = useState(false);
  const [AgreeParent, setAgreeParent] = useState(false)

  const [student, setStudent] = useState({
    studFullName: "",
    studDob: "",
    studAdhar: "",
    studSign: "",
    studContact: "",
    parentContact: "",
    studEmail: "",
    studNationality: "",
    studBloodGroup: "",
    studFatherName: "",
    studFatherOccupation: "",
    studMotherName: "",
    studCAddress: "",
    studCCity: "",
    studCPincode: "",
    studCTaluka: "",
    studCDistrict: "",
    studCState: "",
    studPAddress: "",
    studPCity: "",
    studPPincode: "",
    studPTaluka: "",
    studPDistrict: "",
    studPState: "",
   });
  
    
    const {studFullName, studDob, studSign, studAdhar, studContact, parentContact, studEmail, studNationality, studBloodGroup, studFatherName, studMotherName, studFatherOccupation, studCAddress, studCCity, studCPincode, studCTaluka, studCDistrict, studCState, studPAddress, studPCity, studPPincode, studPTaluka, studPDistrict, studPState } =
    student;
  const validateForm = () => {
    // Retrieving the values of form elements 
    var fileInput = document.getElementById('profile');
    var name = document.formname.studFullName.value;
    var gender = document.formname.studGender.value;
    var dob = document.formname.studDob.value;
    var adharcard = document.formname.studAdhar.value;
    var email = document.formname.studEmail.value;
    var studmobile = document.formname.studContact.value;
    var parmobile = document.formname.parentContact.value;
    var nationality = document.formname.studNationality.value;
    var bloodgrp = document.formname.studBloodGroup.value;
    var fname = document.formname.studFatherName.value;
    var occupation = document.formname.studFatherOccupation.value;
    var mothername = document.formname.studMotherName.value;
    var caddress = document.formname.studCAddress.value;
    var cityvillage = document.formname.studCCity.value;
    var cpincode = document.formname.studCPincode.value;
    var ctal = document.formname.studCTaluka.value;
    var cdist = document.formname.studCDistrict.value;
    var cstate = document.formname.studCState.value;
    var paddress = document.formname.studPAddress.value;
    var pcityvillage = document.formname.studPCity.value;
    var ppincode = document.formname.studPPincode.value;
    var ptal = document.formname.studPTaluka.value;
    var pdist = document.formname.studPDistrict.value;
    var pstate = document.formname.studPState.value;
    var studsign = document.formname.studSign.value;
   
    //Validate Branch  studSign
    var e = document.getElementById("branchs");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;
    if (optionSelIndex == 0) {
      alert("Please select a branch");
      document.getElementById("branchs").focus();
      return false;
    }

    // Validate name
    if (name == "") {
      alert("Please enter your name");
      document.getElementById("studFullName").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(name) === false) {
        alert("Please enter a valid name");
        document.getElementById("studFullName").focus();
        return false;
      }
    }

    //Photo
    if (fileInput.value == "") {
      alert("Please select Photo");
      document.getElementById("studSign").focus();
      return false;
    }
    else
    {
      var fileInput =
      document.getElementById('profile');
   
  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions =
          /(\.jpg|\.jpeg|\.png|\.gif)$/i;
   
  if (!allowedExtensions.exec(filePath)) {
      alert('Invalid file type');    
      document.getElementById("studSign").focus();  
      return false;
  }


    }

    //PhotoSign
    if (studsign == "") {
      alert("Please enter photo sign(First and Last Name)");
      document.getElementById("studSign").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(studsign) === false) {
        alert("Please enter a valid name");
        document.getElementById("studSign").focus();
        return false;
      }
    }

    //Gender
    if (gender == "") {
      alert("Please select Gender")
      document.getElementById("studGender").focus();
      return false;
    }

    //DOB
    if (dob == "") {
      alert("Please add Date of Birth")
      document.getElementById("studDob").focus();
      return false;
    }

    //Adhar Card
    if (adharcard == "") {
      alert("Please enter your Adhar Card No:");
      document.getElementById("studAdhar").focus();
      return false;
    }
    else {
      var regex = /^[1-9]\d{11}$/;
      if (regex.test(adharcard) === false) {
        alert("Please enter a valid 12 digit only");
        document.getElementById("studAdhar").focus();
        return false;
      }
    }

    //Student Mobile
    if (studmobile == "") {
      alert("Please enter student Contact No.");
      document.getElementById("studContact").focus();
      return false;
    } else {
      var regex = /^[1-9]\d{9}$/;
      if (regex.test(studmobile) === false) {
        alert("Please enter a valid 10 digit only");
        document.getElementById("studContact").focus();
        return false;
      }
    }

    //Contact Parents
    if (parmobile == "") {
      alert("Please enter student Contact No.");
      document.getElementById("parentContact").focus();
      return false;
    } else {
      var regex = /^[1-9]\d{9}$/;
      if (regex.test(parmobile) === false) {
        alert("Please enter a valid 10 digit only");
        document.getElementById("parentContact").focus();
        return false;
      }
    }

    // Validate email address
    if (email == "") {
      alert("Please enter your email address");
      document.getElementById("email").focus();
      return false;
    } else {    
      var regex = /^\S+@\S+\.\S+$/;
      if (regex.test(email) === false) {
        alert("Please enter a valid email address");
        document.getElementById("email").focus();
        return false;
      }
    }

    //Nationality   
    if (nationality == "") {
      alert("Please enter your Nationality");
      document.getElementById("studNationality").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(nationality) === false) {
        alert("Please enter a valid Nationality");
        document.getElementById("studNationality").focus();
        return false;
      }
    }

    //Validate Blood Group
    if (bloodgrp == "") {
      alert("Please enter your Blood Group");
      document.getElementById("studBloodGroup").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s+-]+$/;
      if (regex.test(bloodgrp) === false) {
        alert("Please enter a valid Blood Group");
        document.getElementById("studBloodGroup").focus();
        return false;
      }
    }

    // Validate Father name
    if (fname == "") {
      alert("Please enter your Father Name");
      document.getElementById("studFatherName").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(fname) === false) {
        alert("Please enter a valid Father Name");
        document.getElementById("studFatherName").focus();
        return false;
      }
    }

    // Validate Occupation
    if (occupation == "") {
      alert("Please enter your Father Name");
      document.getElementById("studFatherOccupation").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(occupation) === false) {
        alert("Please enter a valid Father Name");
        document.getElementById("studFatherOccupation").focus();
        return false;
      }
    }

    // Validate Mothers Name
    if (mothername == "") {
      alert("Please enter your Mother Name");
      document.getElementById("studMotherName").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(mothername) === false) {
        alert("Please enter a valid Mother Name");
        document.getElementById("studMotherName").focus();
        return false;
      }
    }

    //Validate category
    var e = document.getElementById("category");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;
    if (optionSelIndex == 0) {
      alert("Please select a Category");
      document.getElementById("category").focus();
      return false;
    }

    //Minority Type Minority Candidature
    var cbox = document.forms["formname"]["MinorityTypeCandidature"];
    if (cbox[0].checked == false && cbox[1].checked == false) {
      alert("Please Select Minority Type");
      document.getElementById("MinorityTypeCandidature").focus();
      return false;
    }

    //Disability Type Candidature
    var cbox = document.forms["formname"]["DisabilityTypeCandidature"];
    if (
      cbox[0].checked == false &&
      cbox[1].checked == false

    ) {
      alert("Please Select Disability Type Candidature");
      document.getElementById("DisabilityTypeCandidature").focus();
      return false;
    }

    //Defence Type Candidature
    var cbox = document.forms["formname"]["DefenceTypeCandidature"];
    if (
      cbox[0].checked == false &&
      cbox[1].checked == false

    ) {
      alert("Please Select Defence Type Candidature");
      document.getElementById("DefenceTypeCandidature").focus();
      return false;
    }

    // Validate CAddress
    if (caddress == "") {
      alert("Please enter your Correspondance Address");
      document.getElementById("studCAddress").focus();
      return false;
    }

    // Validate City/Village
    if (cityvillage == "") {
      alert("Please enter your City/Village");
      document.getElementById("studCCity").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(cityvillage) === false) {
        alert("Please enter a valid City/Village");
        document.getElementById("studCCity").focus();
        return false;
      }
    }

    //Defence Type Candidature
    var cbox = document.forms["formname"]["CArea"];
    if (
      cbox[0].checked == false &&
      cbox[1].checked == false

    ) {
      alert("Please Select Area");
      document.getElementById("CArea").focus();
      return false;
    }

    //CPincode
    if (cpincode == "") {
      alert("Please enter Coresspondance Pincode.");
      document.getElementById("studCPincode").focus();
    } else {
      var regex = /^[0-9]\d{5}$/;
      if (regex.test(cpincode) === false) {
        alert("Please enter a valid 6 digit only");
        document.getElementById("studCPincode").focus();
        return false;
      }
    }

    // Validate taluka
    if (ctal == "") {
      alert("Please enter your Taluka");
      document.getElementById("studCTaluka").focus();
      return false;

    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(ctal) === false) {
        alert("Please enter a valid Taluka");
        document.getElementById("studCTaluka").focus();
        return false;
      }
    }

    // Validate District
    if (cdist == "") {
      alert("Please enter your District");
      document.getElementById("studCDistrict").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(cdist) === false) {
        alert("Please enter a valid District");
        document.getElementById("studCDistrict").focus();
        return false;
      }
    }

    // Validate State
    if (cstate == "") {
      alert("Please enter your State");
      document.getElementById("studCState").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(cstate) === false) {
        alert("Please enter a valid State");
        document.getElementById("studCState").focus();
        return false;
      }
    }

    // Validate PAddress
    if (paddress == "") {
      alert("Please enter your Correspondance Address");
      document.getElementById("studPAddress").focus();
      return false;
    }

    // Validate City/Village
    if (pcityvillage == "") {
      alert("Please enter your City/Village");
      document.getElementById("studPCity").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(pcityvillage) === false) {
        alert("Please enter a valid City/Village");
        document.getElementById("studPCity").focus();
        return false;
      }
    }

    //Defence Type Candidature
    var cbox = document.forms["formname"]["Parea"];
    if (
      cbox[0].checked == false &&
      cbox[1].checked == false

    ) {
      alert("Please Select Area");
      document.getElementById("Parea").focus();
      return false;
    }

    //CPincode
    if (ppincode == "") {
      alert("Please enter Coresspondance Pincode.");
      document.getElementById("studPPincode").focus();
      return false;
    } else {
      var regex = /^[0-9]\d{5}$/;
      if (regex.test(ppincode) === false) {
        alert("Please enter a valid 6 digit only");
        document.getElementById("studPPincode").focus();
        return false;
      }
    }

    // Validate taluka
    if (ptal == "") {
      alert("Please enter your Taluka");
      document.getElementById("studPTaluka").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(ptal) === false) {
        alert("Please enter a valid Taluka");
        document.getElementById("studPTaluka").focus();
        return false;
      }
    }

    // Validate District
    if (pdist == "") {
      alert("Please enter your District");
      document.getElementById("studPDistrict").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(pdist) === false) {
        alert("Please enter a valid District");
        document.getElementById("studPDistrict").focus();
        return false;
      }
    }

    // Validate State
    if (pstate == "") {
      alert("Please enter your State");
      document.getElementById("studPState").focus();
      return false;
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(pstate) === false) {
        alert("Please enter a valid State");
        document.getElementById("studPState").focus();
        return false;
      }
    }


    if (SscYear.length == 0) {
      alert("Please enter your Passing SSC Year");
      document.getElementById("SSCYear").focus();
      return false;
    }
    if (SscMarkObt.length == 0) {
      alert("Please enter your SSC Marks Obtained");
      document.getElementById("SSCOutOf").focus();
      return false;
    }

    if (SscMark.length == 0 || SscMark == "") {
      alert("Please enter your SSC Out of Marks");
      document.getElementById("SSCMark").focus();
      return false;
    }
    
    if (SscPercent.length == 0) {
      alert("Please enter your SSC Percentage");
      document.getElementById("SSCPercent").focus();
      return false;
    }

    if (CetRollNo == "" || CetRollNo == 0) {
      alert("Please enter your Application No/Roll No.");
      document.getElementById("mhtcetappno").focus();
      return false;
    }

    if (CetYear == 0 || CetYear == "") {
      alert("Please enter your MHTCET Year of Passing.");
      document.getElementById("mhtcetyrofpass").focus();
      return false;
    }

    if (CetMathScr == 0 || CetMathScr == "") {
      alert("Please enter your MHTCET Mathematics Marks.");
      document.getElementById("mhtcetmathsscore").focus();
      return false;
    }

    if (CetPhyScr == 0) {
      alert("Please enter your MHTCET Physics Marks.");
      document.getElementById("mhtcetphysics").focus();
      return false;
    }

    if (CetChemScr == 0) {
      alert("Please enter your MHTCET Chemistry Marks.");
      document.getElementById("mhtcetchemistry").focus();
      return false;
    }

    if (CetTotal == 0) {
      alert("Please enter your MHTCET Total.");
      document.getElementById("mhtcetttlscore").focus();
      return false;
    }

    if (JeeRollNo == 0 || JeeRollNo == "") {
      alert("Please enter your JEE Application No/Roll No..");
      document.getElementById("JEERollno").focus();
      return false;
    }

    if (JeeYear == 0 || JeeYear == "") {
      alert("Please enter your JEE Year of Passing.");
      document.getElementById("JEEyrofpass").focus();
      return false;
    }


    if (JeeMathScr == 0 || JeeMathScr == "") {
      alert("Please enter your Mathematics Marks.");
      document.getElementById("JEEmathsscore").focus();
      return false;
    }

    if (JeePhyScr == 0 || JeePhyScr == "") {
      alert("Please enter your JEE Physics Marks.");
      document.getElementById("JEEphysics").focus();
      return false;
    }

    if (JeeChemScr == 0 || JeeChemScr == "") {
      alert("Please enter your JEE Chemistry Marks.");
      document.getElementById("JEEchemscore").focus();
      return false;
    }

    if (JeeTotal == 0 || JeeTotal == "") {
      alert("Please enter your JEE Total Score");
      document.getElementById("JEEttlscore").focus();
      return false;
    }


    //Student sign
    if (agreeStudent == "") {
      alert("Please enter your Student Agree");
      document.getElementById("studentSign").focus();
      return false;
    }


    if (AgreeParent == "") {
      alert("Please enter your Parent Agree");
      document.getElementById("ParentAgree").focus();
      return false;
    }
    handleSubmit();
  };


  const checkboxHandler = () => {
    setAgreeStudent(!agreeStudent);
  }

  function handleChange(e) {
    const target = e.target;
    if (target.checked) {
      setStudGender(target.value);
    }
  }
  const handleMinorityCheckbox = (minority) => {
    setSelectedMinority(minority);
  };

  const handleDisabilityCheckbox = (disability) => {
    setSelectedDisability(disability);
  };

  const handleDefenceCheckbox = (defence) => {
    setSelectedDefence(defence);
  };

  const handleCareaCheckbox = (cArea) => {
    setStudCArea(cArea);
  };
  const handlePareaCheckbox = (pArea) => {
    setStudPArea(pArea);
  };


  const registerDataChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setProfile(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setStudent({ ...student, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = () => {
    //e.preventDefault();    
    const payload = {
      Branch: selectedBranchOption,
      FullName: student.studFullName,
      DOB: student.studDob,
      Gender: studGender,
      StudentPhoto: profile,
      PhotoSign: studSign,
      AdharcardNo: student.studAdhar,
      ContactStudent: student.studContact,
      ContactParents: student.parentContact,
      Email: student.studEmail,
      Nationality: student.studNationality,
      Bloodgrp: student.studBloodGroup,
      FatherName: student.studFatherName,
      Occupation: student.studFatherOccupation,
      MotherName: student.studMotherName,
      Category: selectedCategoryOption,
      MinorityTypeCandidature: selectedMinority,
      DisabilityTypeCandidature: selectedDisability,
      DefenceTypeCandidature: selectedDefence,
      CorrespondenceAddress: student.studCAddress,
      CCityVillage: student.studCCity,
      CArea: studCArea,
      CPincode: student.studCPincode,
      CTaluka: student.studCTaluka,
      CDistrict: student.studCDistrict,
      CState: student.studCState,
      PermanentAddress: student.studPAddress,
      PCityVillage: student.studPCity,
      PArea: studPArea,
      PPincode: student.studPPincode,
      PTaluka: student.studPTaluka,
      PDistrict: student.studPDistrict,
      PState: student.studPState,
      YrOfPassingSSC: SscYear,
      ObtainedMarksSSC: SscMarkObt,
      MarksOutOfSSC: SscMark,
      PercentageOfMarksSSC: SscPercent,
      YrOfPassingHSC: HscYear,
      ObtainedMarksHSC: HscMarkObt,
      MarksOutOfHSC: HscMark,
      PercentageOfMarksHSC: HscPercent,
      YrOfPassingOther: DipYear,
      ObtainedMarksOther: DipMarkObt,
      MarksOutOfOther: DipMark,
      PercentageOfMarksOther: DipPercent,
      ApplicationNoMHTCET: CetRollNo,
      YearOfPassingMHTCET: CetYear,
      MathematicsScoreMHTCET: CetMathScr,
      PhysicsScoreMHTCET: CetPhyScr,
      ChemistryScoreMHTCET: CetChemScr,
      TotalScoreMHTCET: CetTotal,
      ApplicationNoJEEMAins: JeeRollNo,
      YearOfPassingJEEMAins: JeeYear,
      MathematicsScoreJEEMAins: JeeMathScr,
      PhysicsScoreJEEMAins: JeePhyScr,
      ChemistryScoreJEEMAins: JeeChemScr,
      TotalScoreJEEMAins: JeeTotal,
      AdmissionLetter: AdmissionLetter,
      SSCMarksheet: SscMarkSheet,
      HSCMarksheet: HscMarkSheet,
      MHTCETScoreCard: CetMarkSheet,
      JEEMains: JeeMarkSheet,
      DipBSC: DiplomaMarkSheet,
      LeavingTransferCert: LCTC,
      NationalityDomicileBirt: Domicile,
      GAPCert: GapCerti,
      CasteCertificate: CastCerti,
      CasteValidityCertificate: CastVali,
      Noncreamylayer: NonCreamy,
      IncomeCerificate: IncomeCerti,
      CertiDefense: DefenceCerti,
      DisabilityCert: PhysicalDisCerti,
      AdharCard: AdharX,
      Remark: Remark,
      SignatureStudent: agreeStudent,
      SignatureParent: AgreeParent

    }
    axios
      .post(
        "https://localhost:44300/api/AdmissionFormInsertRecord", payload

      )
      .then((res) => {
        console.log(res.data);
      //alert("Data Uploaded Successfully!!!");
      toast.success(`${res.data.Message}`);
      setSelectedBranchOption("") 
      setStudGender("");
     setStudent({
        studFullName: "",
        studDob: "",
        studAdhar: "",
        studSign: "",
        studContact: "",
        parentContact: "",
        studEmail: "",
        studNationality: "",
        studBloodGroup: "",
        studFatherName: "",
        studFatherOccupation: "",
        studMotherName: "",
        studCAddress:"",
        studCCity: "",
        studCPincode: "",
        studCTaluka: "",
        studCDistrict: "",
        studCState: "",
        studPAddress: "",
        studPCity: "",
        studPPincode: "",
        studPTaluka:"",
        studPDistrict: "",
        studPState: "",
       
     });
     setSelectedCategoryOption("");
     setSelectedMinority("");
     setSelectedDisability("");
     setSelectedDefence("");
     setStudCArea("");
     setStudPArea("");
     setSscYear("");
     setSscMarkObt("");
     setSscMark("");
     setSscPercent("");
     setHscYear("");
     setHscMarkObt("");
     setHscMark("");
     setHscPercent("");
     setDipYear("");
     setDipMarkObt("");
     setDipMark("");
     setDipPercent("");
     setCetRollNo("");
     setCetYear("");
     setCetChemScr("");
     setCetMathScr("");
     setCetPhyScr("");
     setCetTotal("");
     setJeeRollNo("");
     setJeeYear("");
     setJeeChemScr("");
     setJeeMathScr("");
     setJeePhyScr("");
     setJeeTotal("");
     setAdmissionLetter(true);
     setAdharX(true);
     setCastCerti(true);
     setCastVali(true);
     setDefenceCerti(true);
     setDomicile(true);
     setCetMarkSheet(true);
     setLCTC(true);
     setGapCerti(true);
     setHscMarkSheet(true);
     setIncomeCerti(false);
     setSscMarkSheet(false);
     setCetMarkSheet(false);
     setJeeMarkSheet(false);
     setPhysicalDisCerti(false);
     setDiplomaMarkSheet(false);
     setRemark("");
     setAgreeStudent(false);
     setAgreeParent(false);
     setProfile(Profile);

      })
      .catch((error) => {
        console.log(error);
      });

  };


  return (
    <>
      {/*************** First level Form start Here *******************/}
      <ToastContainer />
      <Main>
      <form className="form-container mt-5" name="formname">
        <div className="admission-section">
          <section>

            <div className="container-fluid">
              <div className="form-heading mt-3 mb-3">
                <h4>Academic year : 2023-2024</h4>
                <h6 className='m-3'>
                  Admission form for first/direct second year - B.tech (engineering)
                </h6>
              </div>

              <div className="container">
                <div className="row">


                  <div className="form-left-container col-md-8">
                    <div className="branch input-wrapper">
                      <label className="mr-5">Branch : </label>      
                      <select id="branchs"
                        name="branch"
                        className="input-container form-select"
                        onChange={(e) =>
                          setSelectedBranchOption(e.target.value)
                        }
                      >
                        <option value="0">Select Branch</option>
                        <option value="cse">CSE</option>
                        <option value="civil">Civil</option>
                        <option value="e&tc">E & TC</option>
                        <option value="mech">Mech</option>
                        <option value="electrical">Electrical</option>
                      </select>
                    </div>
                    <div className="input-wrapper">
                      <label className="form-label">Student's Full Name : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studFullName"
                          name="studFullName"
                          className="form-control"
                          value={studFullName}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">Date of Birth : </label>

                      <div className="input-container">
                        <input
                          type="date"
                          required
                          id="studDob"
                          name="studDob"
                          className="form-control"
                          value={studDob}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label>Gender : </label>
                      <div className="gender-container">
                        <label className="mr-5">Male</label>
                        <input
                          type="radio"
                          id="studGender"
                          name="studGender"
                          value="male"
                          className="form-check-input"
                          checked={studGender == 'male'}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="gender-container">
                        <label className="mr-5">Female</label>
                        <input
                          id="studGender"
                          type="radio"
                          className="form-check-input"
                          name="studGender"
                          value="female" checked={studGender == 'female'} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">Adhar Card No : </label>

                      <div className="input-container">
                        <input
                          type="number"
                          required
                          id="studAdhar"
                          name="studAdhar"
                          className="form-control"
                          value={studAdhar}
                          onChange={registerDataChange}
                          onKeyPress={(event) => {
                            if (!/[.0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper float-left">
                      <label className="form-label">Contact No.(Student) : </label>

                      <div className="input-container">
                        <input
                          type="number"
                          required
                          id="studContact"
                          name="studContact"
                          className="form-control"
                          value={studContact}
                          onChange={registerDataChange}
                          onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)); }}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper float-left">
                      <label className="form-label">Contact No.(Parent) : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="parentContact"
                          name="parentContact"
                          onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)); }}
                          className="form-control"
                          value={parentContact}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper float-left">
                      <label className="form-label">Email Id : </label>

                      <div className="input-container">
                        <input
                          type="email"
                          id="email"
                          required
                          name="studEmail"
                          className="form-control"
                          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                          value={studEmail}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper float-left">
                      <label className="form-label">Nationality : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studNationality"
                          name="studNationality"
                          className="form-control"
                          value={studNationality}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper float-left">
                      <label className="form-label">Blood Group : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studBloodGroup"
                          name="studBloodGroup"
                          className="form-control"
                          value={studBloodGroup}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper float-left">
                      <label className="form-label">Father's Name : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studFatherName"
                          name="studFatherName"
                          className="form-control"
                          value={studFatherName}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper float-left">
                      <label className="form-label">Father's Occupation : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studFatherOccupation"
                          name="studFatherOccupation"
                          className="form-control"
                          value={studFatherOccupation}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper float-left">
                      <label className="form-label">Mother's Name : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          id="studMotherName"
                          required
                          name="studMotherName"
                          className="form-control"
                          value={studMotherName}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="category input-wrapper">
                      <label className="mr-5">Category : </label>
                      <select id="category"
                        name="category"
                        className="input-container form-select"
                        onChange={(e) =>
                          setSelectedCategoryOption(e.target.value)
                        }
                      >
                        <option value="0">Select Category</option>
                        <option value="sc">SC</option>
                        <option value="open">Open</option>
                        <option value="st">ST</option>
                        <option value="obc">OBC</option>
                        <option value="sbc">SBC</option>
                        <option value="vj/dt">VJ/DT</option>
                        <option value="nt-a">NT-A</option>
                        <option value="nt-b">NT-B</option>
                        <option value="nt-c">NT-C</option>
                        <option value="nt-d">NT-D</option>
                        <option value="ews">EWS</option>
                        <option value="minority">MINORITY</option>
                      </select>
                    </div>
                    <div className="minority mt-3">
                      <label className="mr-5">Do you belong to Minority Type Candidature? : </label>

                      <div className="checkbox-container">
                        <label className="mr-5">Yes</label>
                        <input
                          type="checkbox"
                          id="MinorityTypeCandidature"
                          name="MinorityTypeCandidature"
                          checked={selectedMinority === 'yes'}
                          className="form-check-input"
                          onChange={() => handleMinorityCheckbox('yes')}
                        />
                      </div>

                      <div className="checkbox-container">
                        <label className="mr-5">No</label>
                        <input
                          type="checkbox"
                          id="MinorityTypeCandidature"
                          name="MinorityTypeCandidature"
                          className="form-check-input"
                          checked={selectedMinority === 'no'}
                          onChange={() => handleMinorityCheckbox('no')}
                        />
                      </div>
                    </div>

                    <div className="minority mt-3">
                      <label className="mr-5">Do You belong to Person with Disability Type Candidature? : </label>

                      <div className="checkbox-container">
                        <label className="mr-5">Yes</label>
                        <input
                          type="checkbox"
                          id='DisabilityTypeCandidature'
                          className="form-check-input"
                          name="DisabilityTypeCandidature"
                          checked={selectedDisability === 'yes'}
                          onChange={() => handleDisabilityCheckbox('yes')}
                        />
                      </div>

                      <div className="checkbox-container">
                        <label className="mr-5">No</label>
                        <input
                          type="checkbox"
                          id='DisabilityTypeCandidature'
                          className="form-check-input"
                          name="DisabilityTypeCandidature"
                          checked={selectedDisability === 'no'}
                          onChange={() => handleDisabilityCheckbox('no')}
                        />
                      </div>
                    </div>

                    <div className="minority mt-3">
                      <label className="mr-5">Do You belong to Defence Type Candidature? : </label>

                      <div className="checkbox-container">
                        <label className="mr-5">Yes</label>
                        <input
                          type="checkbox"
                          id="DefenceTypeCandidature"
                          className="form-check-input"
                          name="DefenceTypeCandidature"
                          checked={selectedDefence === 'yes'}
                          onChange={() => handleDefenceCheckbox('yes')}
                        />
                      </div>

                      <div className="checkbox-container">
                        <label className="mr-5">No</label>
                        <input
                          type="checkbox"
                          id="DefenceTypeCandidature"
                          className="form-check-input"
                          name="DefenceTypeCandidature"
                          checked={selectedDefence === 'no'}
                          onChange={() => handleDefenceCheckbox('no')}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">Correspondence Address : </label>

                      <div className="input-container">
                        <textarea
                          type="text"
                          required
                          id="studCAddress"
                          name="studCAddress"
                          className="form-control"
                          value={studCAddress}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">City/Village : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studCCity"
                          name="studCCity"
                          className="form-control"
                          value={studCCity}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label>Area : </label>
                      <div className="gender-container">
                        <label className="mr-5">Urban</label>
                        <input
                          type="checkbox"
                          id="CArea"
                          name="CArea"
                          className="form-check-input"
                          checked={studCArea === 'CUrban'}
                          onChange={() => handleCareaCheckbox('CUrban')}
                        />
                      </div>

                      <div className="gender-container">
                        <label className="mr-5">Rural</label>
                        <input
                          type="checkbox"
                          id="CArea"
                          name="CArea"
                          className="form-check-input"
                          checked={studCArea === 'CRural'}
                          onChange={() => handleCareaCheckbox('CRural')}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">Pincode : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studCPincode"
                          name="studCPincode"
                          className="form-control"
                          value={studCPincode}
                          onChange={registerDataChange}
                          onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">Taluka : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          id="studCTaluka"
                          required
                          name="studCTaluka"
                          className="form-control"
                          value={studCTaluka}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">District : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studCDistrict"
                          name="studCDistrict"
                          className="form-control"
                          value={studCDistrict}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">State : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studCState"
                          name="studCState"
                          className="form-control"
                          value={studCState}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>


                    <div className="input-wrapper">
                      <label className="form-label">Permanent Address : </label>

                      <div className="input-container">
                        <textarea
                          type="text"
                          required
                          id="studPAddress"
                          name="studPAddress"
                          className="form-control"
                          value={studPAddress}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">City/Village : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          id="studPCity"
                          required
                          name="studPCity"
                          className="form-control"
                          value={studPCity}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label>Area : </label>
                      <div className="gender-container">
                        <label className="mr-5">Urban</label>
                        <input
                          type="checkbox"
                          id="Parea"
                          name="Parea"
                          className="form-check-input"
                          checked={studPArea === 'PUrban'}
                          onChange={() => handlePareaCheckbox('PUrban')}
                        />
                      </div>

                      <div className="gender-container">
                        <label className="mr-5">Rural</label>
                        <input
                          type="checkbox"
                          id="Parea"
                          name="Parea"
                          className="form-check-input"
                          checked={studPArea === 'PRural'}
                          onChange={() => handlePareaCheckbox('PRural')}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">Pincode : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          id="studPPincode"
                          required
                          name="studPPincode"
                          className="form-control"
                          value={studPPincode}
                          onChange={registerDataChange}
                          onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">Taluka : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studPTaluka"
                          name="studPTaluka"
                          className="form-control"
                          value={studPTaluka}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">District : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          required
                          id="studPDistrict"
                          name="studPDistrict"
                          className="form-control"
                          value={studPDistrict}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>

                    <div className="input-wrapper">
                      <label className="form-label">State : </label>

                      <div className="input-container">
                        <input
                          type="text"
                          id="studPState"
                          required
                          name="studPState"
                          className="form-control"
                          value={studPState}
                          onChange={registerDataChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-right-container col-md-4">
                    <div id="registerImage">
                      <img src={profile} alt="Profile Picture" />
                      <input
                        type="file"
                        id="profile"
                        name="profile"
                        accept="image/*"
                        onChange={registerDataChange}
                      />
                    </div>
                    <input
                      type="text"
                      name="studSign"
                      id="studSign"
                      onChange={registerDataChange}
                      placeholder="Sign"
                      value={studSign}
                      className="form-control mt-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Academic year Form Start*/}

          <section>
            <div className="container ">

              <div className="m-4 table-responsive">
                <h4 className="text-center p-2" style={{ border: '2px', backgroundColor: 'gray', color: 'white', borderRadius: '10px' }}>Marks Obtained in Board Examination</h4>
                <Table className="">
                  <TableBody>
                    <TableRow>
                      <TableCell>Exam</TableCell>
                      <TableCell>Year of Passing</TableCell>
                      <TableCell>Marks Obtained</TableCell>
                      <TableCell>Marks Out Of</TableCell>
                      <TableCell>% of Marks</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>S.S.C</TableCell>
                      <TableCell>
                        <input type="text" id="SSCYear" name="SSCYear" className="form-control" onChange={(e)=>setSscYear(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                      <TableCell>
                        <input type="text" id="SSCMark" name="SSCMark" className="form-control" onChange={(e)=>setSscMarkObt(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                      <TableCell>
                        <input type="text" id="SSCOutOf" name="SSCOutOf" className="form-control" onChange={(e)=>setSscMark(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                      <TableCell>
                        <input type="text" id="SSCPercent" name="SSCPercent" className="form-control" onChange={(e)=>setSscPercent(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>H.S.C</TableCell>
                      <TableCell>
                        <input type="text" id="HSCYear" className="form-control" onChange={(e) => setHscYear(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                      <TableCell>
                        <input type="text" id="HSCMark" className="form-control" onChange={(e) => setHscMarkObt(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                      <TableCell>
                        <input type="text" id="HSCOutOf" className="form-control" onChange={(e) => setHscMark(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                      <TableCell>
                        <input type="text" id="HSCPercent" className="form-control" onChange={(e) => setHscPercent(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Diploma / B.Sc / D.Voc.</TableCell>
                      <TableCell>
                        <input type="text" className="form-control" onChange={(e) => setDipYear(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                      <TableCell>
                        <input type="text" className="form-control" onChange={(e) => setDipMarkObt(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                      <TableCell>
                        <input type="text" className="form-control" onChange={(e) => setDipMark(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                      <TableCell>
                        <input type="text" className="form-control" onChange={(e) => setDipPercent(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <hr />

              <div className="m-4 table-responsive">
                <h4 className="text-center p-2" style={{ border: '2px', backgroundColor: 'gray', color: 'white', borderRadius: '10px' }}>
                  Marks Obtained in MHT-CET and/or JEE Mains Examination
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <h4 className="text-center p-2" style={{ border: '2px', backgroundColor: 'gray ', color: 'white', borderRadius: '10px' }}>MHT-CET</h4>
                    <Table>
                      <TableBody>
                        <TableRow>

                          <TableCell>Application/Roll No.</TableCell>
                          <TableCell>
                            <input type="text" id="mhtcetappno" className="form-control" name="mhtcetappno" onChange={(e) => setCetRollNo(e.target.value)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Year of Passing</TableCell>
                          <TableCell>
                            <input type="text" id="mhtcetyrofpass" className="form-control" name="mhtcetyrofpass" onChange={(e) => setCetYear(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Mathematics % Score</TableCell>
                          <TableCell>
                            <input type="text" id="mhtcetmathsscore" className="form-control" name="mhtcetmathsscore" onChange={(e) => setCetMathScr(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Physics % Score</TableCell>
                          <TableCell>
                            <input type="text" id="mhtcetphysics" className="form-control" name="mhtcetphysics" onChange={(e) => setCetPhyScr(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Chemistry % Score</TableCell>
                          <TableCell>
                            <input type="text" id="mhtcetchemistry" className="form-control" name="mhtcetchemistry" onChange={(e) => setCetChemScr(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Total % Score</TableCell>
                          <TableCell>
                            <input type="text" id="mhtcetttlscore" className="form-control" name="mhtcetttlscore" onChange={(e) => setCetTotal(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div className="col-lg-6">
                    <h4 className="text-center p-2" style={{ border: '2px', backgroundColor: 'gray', color: 'white', borderRadius: '10px' }}>JEE Mains Examination</h4>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Application/Roll No.</TableCell>
                          <TableCell>
                            <input type="text" id="JEERollno" className="form-control" name="JEERollno" onChange={(e) => setJeeRollNo(e.target.value)} ></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Year of Passing</TableCell>
                          <TableCell>
                            <input type="text" id="JEEyrofpass" className="form-control" name="JEEyrofpass" onChange={(e) => setJeeYear(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Mathematics % Score</TableCell>
                          <TableCell>
                            <input type="text" id="JEEmathsscore" className="form-control" name="JEEmathsscore" onChange={(e) => setJeeMathScr(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Physics % Score</TableCell>
                          <TableCell>
                            <input type="text" id="JEEphysics" className="form-control" name="JEEphysics" onChange={(e) => setJeePhyScr(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Chemistry % Score</TableCell>
                          <TableCell>
                            <input type="text" id="JEEchemscore" className="form-control" name="JEEchemscore" onChange={(e) => setJeeChemScr(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Total % Score</TableCell>
                          <TableCell>
                            <input type="text" id="JEEttlscore" className="form-control" name="JEEttlscore" onChange={(e) => setJeeTotal(e.target.value)} onKeyPress={(event) => { if (!/[.0-9]/.test(event.key)) { event.preventDefault() } }}></input>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>

              <hr />

              <div className="m-4 table-responsive">
                <h4 className="text-center p-2" style={{ border: '2px', backgroundColor: 'gray', color: 'white', borderRadius: '10px' }}>
                  List of Document attached (Original Set and attested Copies in 05
                  Sets)
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Sr No.</TableCell>
                          <TableCell>Document Details </TableCell>
                          <TableCell>if Yes</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>1</TableCell>
                          <TableCell>Admission Letter / Seat Acceptance Letter</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setAdmissionLetter(!AdmissionLetter)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>2</TableCell>
                          <TableCell>S.S.C (Std. X) Mark Sheet</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setSscMarkSheet(!SscMarkSheet)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>3</TableCell>
                          <TableCell>H.S.C (Std. XII) Mark Sheet</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setHscMarkSheet(!HscMarkSheet)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>4</TableCell>
                          <TableCell>MHT-CET Score Card</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setCetMarkSheet(!CetMarkSheet)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>5</TableCell>
                          <TableCell>JEE Mains Score Card (if applicable)</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setJeeMarkSheet(!JeeMarkSheet)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>6</TableCell>
                          <TableCell>
                            Diploma / B.Sc. / D.Voc Mark Sheet (if applicable)
                          </TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setDiplomaMarkSheet(!DiplomaMarkSheet)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>7</TableCell>
                          <TableCell>
                            Leaving Certificate / Transfer Certificate
                          </TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setLCTC(!LCTC)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>8</TableCell>
                          <TableCell>
                            Indian Nationality / Domicile / Birth Certificate
                          </TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setDomicile(!Domicile)}></input>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <div className="col-lg-6">
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>Sr No.</TableCell>
                          <TableCell>Document Details </TableCell>
                          <TableCell>if Yes</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>9</TableCell>
                          <TableCell>Gap Certificate (if applicable)</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setGapCerti(!GapCerti)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>10</TableCell>
                          <TableCell>Cast Certificate</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setCastCerti(!CastCerti)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>11</TableCell>
                          <TableCell>Cast Validity Certificate</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setCastVali(!CastVali)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>12</TableCell>
                          <TableCell>Non-Creamy Layer Certificate</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setNonCreamy(!NonCreamy)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>13</TableCell>
                          <TableCell>
                            Income Certificate (if applicable scholarship student)
                          </TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setIncomeCerti(!IncomeCerti)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>14</TableCell>
                          <TableCell>Certificate of Defence Service</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setDefenceCerti(!DefenceCerti)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>15</TableCell>
                          <TableCell>Certificate of Physical Disability</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setPhysicalDisCerti(!PhysicalDisCerti)}></input>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>16</TableCell>
                          <TableCell>Adhar Card Xerox</TableCell>
                          <TableCell>
                            <input type="checkbox" className="form-check-input" onChange={(e) => setAdharX(!AdharX)}></input>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-center m-4">
                <textarea placeholder="Remark (if any)" rows="5" cols="80" onChange={(e) => setRemark(e.target.value)}></textarea>
              </div>
            </div>
          </section>

          {/* Undertaking form start here */}
          <section>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="heading mt-3">Undertaking</h2>

                  <ul>
                    <li>To,</li>
                    <li>The Principle,</li>
                    <li>Sanjay Ghodawat Institute,Atigre</li>
                    <li>Respected Sir,</li>
                  </ul>
                  <p className="mt-3">I -----------------------------------------------------------------------------------------------------------------------------
                    The underSigned, admitted to FE/DSE (Branch: -----------------------------) for the year 2023-2024 hereby undertake that-</p>

                  <ul className="undertaking-terms">
                    <li>The above information is correct to the best of my knowledge and belief.</li>
                    <li>I will confirm my DTE Online Admission within time given by DTE and in case failed to do so I am responsible for consequences.</li>
                    <li>I will be fully responsible for producing all the required Original documents for my eligibility,for the course to which I am admitted, and failure to do so by prescribed end date will lead to automatic cancellation of my admission without any liability of any nature to the collage.
                    </li>
                    <li>I will pay full fees of the institute at the time of admission and the charges which Government of Maharashtra/ DBATU,Lonere may levy from time, by due dates and in the event of failure on my part, the Principal of the collage may take such action against me.</li>
                    <li>In case of any increase in fee by Shikshan Samitee, I am bound to pay the same to institute.I am aware that if I do not pay all the fees in time, I will not permitted to appear for the University Examination.</li>
                    <li>I hereby agree to confirm to the rules and regulations at present in force or that may hereafter be made by UGC,DTE,DBATU Lonere, Institute, and/or Govt.I undertake that so long as I am a student of the collage, I will do nothing either inside the collage or outsite the collage that will interfere with its orderly governance and discilpine. I will fulfil attendance criteria to become eligible to appear for the exam. If at any time in future it is found that I have produced false information or concealed any facts;my admission is deemed to cancelled.</li>
                    <li>I know that as per UGC Regulations on Curbing the Menance of Ragging in Higher Educational Institutions, 2009 is strictly prohibited in collage campus and hostel, If I am found in such a case, the necessary disciplinary action taken by the college will be binding on me and I will submit Affidavit of student and Parents as per Annexure I and II.</li>
                  </ul>

                  <p className="mb-3">Date : --------------------</p>
                  <p>Place : ----------------------</p>


                  <div className="agree-checkbox">

                    <input
                      type="checkbox"
                      onChange={checkboxHandler}
                      name="agreeStudent"
                      className="mr-5 mb-5 form-check-input"
                    />
                    <label className="label" id="studentSign">I agree the terms and conditions</label>
                  </div>




                </div>
              </div>
            </div>
          </section>

          {/************ bandhanpatra section start here ******************/}
          <section>
            <div className="container">
              <div className="text-center p-4">
                <h3 className="heading">बंधपत्र</h3>
              </div>
              <div className="content">
                मी या शाखेत प्रवेश घेतला असून मी असे लिहून देतो / देते की खालील सर्व मुद्दे शासन
                निर्णय क्र. २०१६ / प्र.क्र. २२१ / शिक्षण- १ दि. ३१ मार्च २०१६ मधील
                आहेत. या निर्णयाची पुर्ण कल्पना मला व माझ्या पालकांना मिळाली आहे.
                <br />
                <br />
                १. विद्यार्थ्याची शैक्षणिक वर्षातील उपस्थिती ही कमीतकमी ७५ टक्के किंवा
                त्यापेक्षा जास्त असणे बंधनकारक आहे.
                <br />
                <br />
                २. विद्यार्थ्याने शैक्षणिक
                वर्षातील दोन्ही.सेमिस्टरच्या परीक्षा देणे बंधनकारक आहे.
                <br />
                <br />
                ३. विद्यार्थ्याने शैक्षणिक वर्ष अर्धवट सोडल्यास शासनाची कोणतीही
                शिष्यवृत्ती / सवलत मिळणार नाही. तसेच त्या काळात त्याला कोणतीही
                शिष्यवृत्ती मिळाली असेल तर ती शासनास परत करावी लागेल.
                <br />
                <br />
                ४. मुद्दा क्र. १
                व २ नुसार विद्यार्थ्याने शैक्षणिक वर्ष पुर्ण केले नाही तर शासनाची
                कोणतीही शिष्यवृत्तीची सवलत लागू होणार नाही तसेच त्या दरम्यान
                शिष्यवृत्ती प्राप्त झाली असल्यास ती शासनास परत करावी लागेल, व सदर
                विद्यार्थ्यास खुल्या प्रवर्गातील फी भरावी लागेल.
                <br />
                <br />
                ५. डिग्री कोर्स चार
                वर्षाचा आहे तो पुर्ण करण्यास विद्यार्थ्यास अतिरिक्त वर्ष लागल्यास त्या
                विद्यार्थ्यास त्यावर्षीजी फी लागू आहे ती भरणे बंधनकारक असेल.
                <br />
                <br />
                वरील सर्व नियमं व निर्णय मी वाचले आहेत व ते मला मान्य आहेत. वरील कोणताही प्रसंग
                माझ्या बाबतीत घडल्यास मी वरील नियमांच्या अनुशंगाने कॉलेजची संपुर्ण फी
                खुल्या प्रवर्गातून भरण्यास तयार आहे. माझी व माझ्य पालकांची या बाबत कोणतीही
                तक्रार असणार नाही
              </div>
              <div className="row m-5">
                <p className="mb-3">Date : --------------------</p>
                <p>Place : ----------------------</p>
              </div>
              <div className="d-flex justify-content-center align-item-center m-5">
              <input type="checkbox" className="form-check-input" onChange={(e) => setAgreeParent(!AgreeParent)}></input>
                <label id='ParentAgree' className='label'>I agree the terms and conditions</label>
               
              </div>
            </div>
          </section>
        </div>
        <div className=" d-flex justify-content-center m-4">
          <button type="button" className="btn btn-success submit-button" onClick={(e) => { validateForm(); }}>Save</button>
        </div>
      </form>
      </Main>
    </>
  )
}

export default AdmissionForm