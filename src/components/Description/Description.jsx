import css from './Description.module.css'

function Description() {
   return (
     <div className={css.descBlock}>
       <h1 className={css.descTitle}>Sip Happens Café</h1>
       <p className={css.descText}>
         Please leave your feedback about our service by selecting one of the
         options below.
       </p>
     </div>
   );

}
export default Description;