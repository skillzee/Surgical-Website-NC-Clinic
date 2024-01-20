import React from 'react'
import { useState , useRef} from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { Calculator, Dice1 } from 'lucide-react'
import emailjs from '@emailjs/browser';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const name = [{"country":"India","code":"91","iso":"IN"},{"country":"Afghanistan","code":"93","iso":"AF"},
{"country":"Albania","code":"355","iso":"AL"},
{"country":"Algeria","code":"213","iso":"DZ"},
{"country":"American Samoa","code":"1-684","iso":"AS"},
{"country":"Andorra","code":"376","iso":"AD"},
{"country":"Angola","code":"244","iso":"AO"},
{"country":"Anguilla","code":"1-264","iso":"AI"},
{"country":"Antarctica","code":"672","iso":"AQ"},
{"country":"Antigua and Barbuda","code":"1-268","iso":"AG"},
{"country":"Argentina","code":"54","iso":"AR"},
{"country":"Armenia","code":"374","iso":"AM"},
{"country":"Aruba","code":"297","iso":"AW"},
{"country":"Australia","code":"61","iso":"AU"},
{"country":"Austria","code":"43","iso":"AT"},
{"country":"Azerbaijan","code":"994","iso":"AZ"},
{"country":"Bahamas","code":"1-242","iso":"BS"},
{"country":"Bahrain","code":"973","iso":"BH"},
{"country":"Bangladesh","code":"880","iso":"BD"},
{"country":"Barbados","code":"1-246","iso":"BB"},
{"country":"Belarus","code":"375","iso":"BY"},
{"country":"Belgium","code":"32","iso":"BE"},
{"country":"Belize","code":"501","iso":"BZ"},
{"country":"Benin","code":"229","iso":"BJ"},
{"country":"Bermuda","code":"1-441","iso":"BM"},
{"country":"Bhutan","code":"975","iso":"BT"},
{"country":"Bolivia","code":"591","iso":"BO"},
{"country":"Bosnia and Herzegovina","code":"387","iso":"BA"},
{"country":"Botswana","code":"267","iso":"BW"},
{"country":"Brazil","code":"55","iso":"BR"},
{"country":"British Indian Ocean Territory","code":"246","iso":"IO"},
{"country":"British Virgin Islands","code":"1-284","iso":"VG"},
{"country":"Brunei","code":"673","iso":"BN"},
{"country":"Bulgaria","code":"359","iso":"BG"},
{"country":"Burkina Faso","code":"226","iso":"BF"},
{"country":"Burundi","code":"257","iso":"BI"},
{"country":"Cambodia","code":"855","iso":"KH"},
{"country":"Cameroon","code":"237","iso":"CM"},
{"country":"Canada","code":"1","iso":"CA"},
{"country":"Cape Verde","code":"238","iso":"CV"},
{"country":"Cayman Islands","code":"1-345","iso":"KY"},
{"country":"Central African Republic","code":"236","iso":"CF"},
{"country":"Chad","code":"235","iso":"TD"},
{"country":"Chile","code":"56","iso":"CL"},
{"country":"China","code":"86","iso":"CN"},
{"country":"Christmas Island","code":"61","iso":"CX"},
{"country":"Cocos Islands","code":"61","iso":"CC"},
{"country":"Colombia","code":"57","iso":"CO"},
{"country":"Comoros","code":"269","iso":"KM"},
{"country":"Cook Islands","code":"682","iso":"CK"},
{"country":"Costa Rica","code":"506","iso":"CR"},
{"country":"Croatia","code":"385","iso":"HR"},
{"country":"Cuba","code":"53","iso":"CU"},
{"country":"Curacao","code":"599","iso":"CW"},
{"country":"Cyprus","code":"357","iso":"CY"},
{"country":"Czech Republic","code":"420","iso":"CZ"},
{"country":"Democratic Republic of the Congo","code":"243","iso":"CD"},
{"country":"Denmark","code":"45","iso":"DK"},
{"country":"Djibouti","code":"253","iso":"DJ"},
{"country":"Dominica","code":"1-767","iso":"DM"},
{"country":"Dominican Republic","code":"1-809, 1-829, 1-849","iso":"DO"},
{"country":"East Timor","code":"670","iso":"TL"},
{"country":"Ecuador","code":"593","iso":"EC"},
{"country":"Egypt","code":"20","iso":"EG"},
{"country":"El Salvador","code":"503","iso":"SV"},
{"country":"Equatorial Guinea","code":"240","iso":"GQ"},
{"country":"Eritrea","code":"291","iso":"ER"},
{"country":"Estonia","code":"372","iso":"EE"},
{"country":"Ethiopia","code":"251","iso":"ET"},
{"country":"Falkland Islands","code":"500","iso":"FK"},
{"country":"Faroe Islands","code":"298","iso":"FO"},
{"country":"Fiji","code":"679","iso":"FJ"},
{"country":"Finland","code":"358","iso":"FI"},
{"country":"France","code":"33","iso":"FR"},
{"country":"French Polynesia","code":"689","iso":"PF"},
{"country":"Gabon","code":"241","iso":"GA"},
{"country":"Gambia","code":"220","iso":"GM"},
{"country":"Georgia","code":"995","iso":"GE"},
{"country":"Germany","code":"49","iso":"DE"},
{"country":"Ghana","code":"233","iso":"GH"},
{"country":"Gibraltar","code":"350","iso":"GI"},
{"country":"Greece","code":"30","iso":"GR"},
{"country":"Greenland","code":"299","iso":"GL"},
{"country":"Grenada","code":"1-473","iso":"GD"},
{"country":"Guam","code":"1-671","iso":"GU"},
{"country":"Guatemala","code":"502","iso":"GT"},
{"country":"Guernsey","code":"44-1481","iso":"GG"},
{"country":"Guinea","code":"224","iso":"GN"},
{"country":"Guinea-Bissau","code":"245","iso":"GW"},
{"country":"Guyana","code":"592","iso":"GY"},
{"country":"Haiti","code":"509","iso":"HT"},
{"country":"Honduras","code":"504","iso":"HN"},
{"country":"Hong Kong","code":"852","iso":"HK"},
{"country":"Hungary","code":"36","iso":"HU"},
{"country":"Iceland","code":"354","iso":"IS"},

{"country":"Indonesia","code":"62","iso":"ID"},
{"country":"Iran","code":"98","iso":"IR"},
{"country":"Iraq","code":"964","iso":"IQ"},
{"country":"Ireland","code":"353","iso":"IE"},
{"country":"Isle of Man","code":"44-1624","iso":"IM"},
{"country":"Israel","code":"972","iso":"IL"},
{"country":"Italy","code":"39","iso":"IT"},
{"country":"Ivory Coast","code":"225","iso":"CI"},
{"country":"Jamaica","code":"1-876","iso":"JM"},
{"country":"Japan","code":"81","iso":"JP"},
{"country":"Jersey","code":"44-1534","iso":"JE"},
{"country":"Jordan","code":"962","iso":"JO"},
{"country":"Kazakhstan","code":"7","iso":"KZ"},
{"country":"Kenya","code":"254","iso":"KE"},
{"country":"Kiribati","code":"686","iso":"KI"},
{"country":"Kosovo","code":"383","iso":"XK"},
{"country":"Kuwait","code":"965","iso":"KW"},
{"country":"Kyrgyzstan","code":"996","iso":"KG"},
{"country":"Laos","code":"856","iso":"LA"},
{"country":"Latvia","code":"371","iso":"LV"},
{"country":"Lebanon","code":"961","iso":"LB"},
{"country":"Lesotho","code":"266","iso":"LS"},
{"country":"Liberia","code":"231","iso":"LR"},
{"country":"Libya","code":"218","iso":"LY"},
{"country":"Liechtenstein","code":"423","iso":"LI"},
{"country":"Lithuania","code":"370","iso":"LT"},
{"country":"Luxembourg","code":"352","iso":"LU"},
{"country":"Macao","code":"853","iso":"MO"},
{"country":"Macedonia","code":"389","iso":"MK"},
{"country":"Madagascar","code":"261","iso":"MG"},
{"country":"Malawi","code":"265","iso":"MW"},
{"country":"Malaysia","code":"60","iso":"MY"},
{"country":"Maldives","code":"960","iso":"MV"},
{"country":"Mali","code":"223","iso":"ML"},
{"country":"Malta","code":"356","iso":"MT"},
{"country":"Marshall Islands","code":"692","iso":"MH"},
{"country":"Mauritania","code":"222","iso":"MR"},
{"country":"Mauritius","code":"230","iso":"MU"},
{"country":"Mayotte","code":"262","iso":"YT"},
{"country":"Mexico","code":"52","iso":"MX"},
{"country":"Micronesia","code":"691","iso":"FM"},
{"country":"Moldova","code":"373","iso":"MD"},
{"country":"Monaco","code":"377","iso":"MC"},
{"country":"Mongolia","code":"976","iso":"MN"},
{"country":"Montenegro","code":"382","iso":"ME"},
{"country":"Montserrat","code":"1-664","iso":"MS"},
{"country":"Morocco","code":"212","iso":"MA"},
{"country":"Mozambique","code":"258","iso":"MZ"},
{"country":"Myanmar","code":"95","iso":"MM"},
{"country":"Namibia","code":"264","iso":"NA"},
{"country":"Nauru","code":"674","iso":"NR"},
{"country":"Nepal","code":"977","iso":"NP"},
{"country":"Netherlands","code":"31","iso":"NL"},
{"country":"Netherlands Antilles","code":"599","iso":"AN"},
{"country":"New Caledonia","code":"687","iso":"NC"},
{"country":"New Zealand","code":"64","iso":"NZ"},
{"country":"Nicaragua","code":"505","iso":"NI"},
{"country":"Niger","code":"227","iso":"NE"},
{"country":"Nigeria","code":"234","iso":"NG"},
{"country":"Niue","code":"683","iso":"NU"},
{"country":"North Korea","code":"850","iso":"KP"},
{"country":"Northern Mariana Islands","code":"1-670","iso":"MP"},
{"country":"Norway","code":"47","iso":"NO"},
{"country":"Oman","code":"968","iso":"OM"},
{"country":"Pakistan","code":"92","iso":"PK"},
{"country":"Palau","code":"680","iso":"PW"},
{"country":"Palestine","code":"970","iso":"PS"},
{"country":"Panama","code":"507","iso":"PA"},
{"country":"Papua New Guinea","code":"675","iso":"PG"},
{"country":"Paraguay","code":"595","iso":"PY"},
{"country":"Peru","code":"51","iso":"PE"},
{"country":"Philippines","code":"63","iso":"PH"},
{"country":"Pitcairn","code":"64","iso":"PN"},
{"country":"Poland","code":"48","iso":"PL"},
{"country":"Portugal","code":"351","iso":"PT"},
{"country":"Puerto Rico","code":"1-787, 1-939","iso":"PR"},
{"country":"Qatar","code":"974","iso":"QA"},
{"country":"Republic of the Congo","code":"242","iso":"CG"},
{"country":"Reunion","code":"262","iso":"RE"},
{"country":"Romania","code":"40","iso":"RO"},
{"country":"Russia","code":"7","iso":"RU"},
{"country":"Rwanda","code":"250","iso":"RW"},
{"country":"Saint Barthelemy","code":"590","iso":"BL"},
{"country":"Saint Helena","code":"290","iso":"SH"},
{"country":"Saint Kitts and Nevis","code":"1-869","iso":"KN"},
{"country":"Saint Lucia","code":"1-758","iso":"LC"},
{"country":"Saint Martin","code":"590","iso":"MF"},
{"country":"Saint Pierre and Miquelon","code":"508","iso":"PM"},
{"country":"Saint Vincent and the Grenadines","code":"1-784","iso":"VC"},
{"country":"Samoa","code":"685","iso":"WS"},
{"country":"San Marino","code":"378","iso":"SM"},
{"country":"Sao Tome and Principe","code":"239","iso":"ST"},
{"country":"Saudi Arabia","code":"966","iso":"SA"},
{"country":"Senegal","code":"221","iso":"SN"},
{"country":"Serbia","code":"381","iso":"RS"},
{"country":"Seychelles","code":"248","iso":"SC"},
{"country":"Sierra Leone","code":"232","iso":"SL"},
{"country":"Singapore","code":"65","iso":"SG"},
{"country":"Sint Maarten","code":"1-721","iso":"SX"},
{"country":"Slovakia","code":"421","iso":"SK"},
{"country":"Slovenia","code":"386","iso":"SI"},
{"country":"Solomon Islands","code":"677","iso":"SB"},
{"country":"Somalia","code":"252","iso":"SO"},
{"country":"South Africa","code":"27","iso":"ZA"},
{"country":"South Korea","code":"82","iso":"KR"},
{"country":"South Sudan","code":"211","iso":"SS"},
{"country":"Spain","code":"34","iso":"ES"},
{"country":"Sri Lanka","code":"94","iso":"LK"},
{"country":"Sudan","code":"249","iso":"SD"},
{"country":"Suriname","code":"597","iso":"SR"},
{"country":"Svalbard and Jan Mayen","code":"47","iso":"SJ"},
{"country":"Swaziland","code":"268","iso":"SZ"},
{"country":"Sweden","code":"46","iso":"SE"},
{"country":"Switzerland","code":"41","iso":"CH"},
{"country":"Syria","code":"963","iso":"SY"},
{"country":"Taiwan","code":"886","iso":"TW"},
{"country":"Tajikistan","code":"992","iso":"TJ"},
{"country":"Tanzania","code":"255","iso":"TZ"},
{"country":"Thailand","code":"66","iso":"TH"},
{"country":"Togo","code":"228","iso":"TG"},
{"country":"Tokelau","code":"690","iso":"TK"},
{"country":"Tonga","code":"676","iso":"TO"},
{"country":"Trinidad and Tobago","code":"1-868","iso":"TT"},
{"country":"Tunisia","code":"216","iso":"TN"},
{"country":"Turkey","code":"90","iso":"TR"},
{"country":"Turkmenistan","code":"993","iso":"TM"},
{"country":"Turks and Caicos Islands","code":"1-649","iso":"TC"},
{"country":"Tuvalu","code":"688","iso":"TV"},
{"country":"U.S. Virgin Islands","code":"1-340","iso":"VI"},
{"country":"Uganda","code":"256","iso":"UG"},
{"country":"Ukraine","code":"380","iso":"UA"},
{"country":"United Arab Emirates","code":"971","iso":"AE"},
{"country":"United Kingdom","code":"44","iso":"GB"},
{"country":"United States","code":"1","iso":"US"},
{"country":"Uruguay","code":"598","iso":"UY"},
{"country":"Uzbekistan","code":"998","iso":"UZ"},
{"country":"Vanuatu","code":"678","iso":"VU"},
{"country":"Vatican","code":"379","iso":"VA"},
{"country":"Venezuela","code":"58","iso":"VE"},
{"country":"Vietnam","code":"84","iso":"VN"},
{"country":"Wallis and Futuna","code":"681","iso":"WF"},
{"country":"Western Sahara","code":"212","iso":"EH"},
{"country":"Yemen","code":"967","iso":"YE"},
{"country":"Zambia","code":"260","iso":"ZM"},
{"country":"Zimbabwe","code":"263","iso":"ZW"}]

export default function Contact() {

  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_aaaedqp', 'template_8ug8gbg', form.current, '3Ql9XqQb6hotH-i-I')
    .then((result) => {
        // alert(result.text);
        alert("Email sent successfully! \nThank you for showing intrest in us, we will get back to you in 24 hours.")
    }, (error) => {
        console.log(error.text);
    });
};



  const [agreed, setAgreed] = useState(false)

  return (
    <div>
    <div className="md:px-10 flex px-4">
    {" "}
    {/* <div className="container mx-auto my-16 text-left flex-1 ">
      <div className="heading">
        <h1 className="text-2xl my-10  font-bold">Instruction to fill the form</h1>
      </div>
      <div>
      <p>
        * Firs
      </p>
      </div>
    </div>
     */}
    <div className="isolate bg-white px-6 py-16 lg:px-8 flex-1 rounded-xl my-10 border-2 border-black">
      <p className='text-center font-bold md:text-4xl text-xl mb-4'>Please fill the form for any inquiry</p>
     
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg]  sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      {/* <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact sales</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div> */}
      <form className="mx-auto max-w-xl" onSubmit={sendEmail} ref={form}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="from_name"
                id="name"
                autoComplete="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="user_email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="prodCode" className="block text-sm font-semibold leading-6 text-gray-900">
              Product Code (if any)
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="prod_id"
                id="prodCode"
                autoComplete="prodCode"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
            
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative flex mt-2.5">
              <div className=" inset-y-0 left-0 items-center">
                <label htmlFor="from_country" className="sr-only">
                  Country
                </label>
                <select
                  id="from_country"
                  name="from_country"
                  className="h-full w-2/3 rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-4 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                {name.map((count) => {
                  return(
                    <option key={count.iso}>{count.country}, +{count.code}</option>
                  )
                })}
                   
                </select>
                <ChevronDownIcon
                  className="pointer-events-none right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input

                type="tel"
                name="from_number"
                id="phone-number"
                autoComplete="tel"
                className=" rounded-md border-0 w-2/3 py-2 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group> */}
        </div>
        <div className="mt-10">
          <button
            value="Send"
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Inquire
          </button>
        </div>
      </form>
    </div>
  </div>
  {/* <h1 className="text-4xl text-center font-bold px-2 md:px-0">Visit us at this location</h1> */}

 {/* <div className="map container flex flex-col space-y-10 mx-auto my-10 items-center px-2 md:flex-row gap-5 lg:px-48">
      <div className="left flex-1 mx-auto ">
        <h1 className="text-xl mb-3">Upasna Homoeo Store</h1>
        <p className="text-xl font-bold mb-8">
          Nasirabad Road, <br />(Near Prachin Shiv
          Mandir) <br />Adarsh Nagar, Ajmer - 305001 
        </p>
        <p className="text-xl mb-3">Timings</p>
        <p className="text-xl font-bold"> Mon - Sat 9:00 am - 9:00 pm</p>
        <p className="text-xl font-bold">Sun - Closed</p>
      </div>
      <div className="right flex-1 ">
   <iframe className="h-64 md:h-96 rounded-2xl "
     scrolling="no"
     marginHeight="0"
     marginWidth="0"
     src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Upasna%20Homoeo%20clinic%20Nasirabad%20Road,%20Adarsh%20Nagar,%20Ajmer%20-%20305001%20+(Upasna%20Homoeo)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
     width="100%"
     height="600"
     frameBorder="0"
   >
     <a href="https://www.maps.ie/population/">
       Calculate population in area
     </a>
   </iframe>
 </div>
    </div> */}
 </div>
  )
}
