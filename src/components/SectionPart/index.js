//css
import "./SectionPart.css"

function SectionPart(props) {
    let {sectionName, flexContent, bgColor, classname} = props;
    // console.log(flexContent);
    return (
        <section className={`section ${classname}`}>
            <div className={sectionName+" "+bgColor+" w-100 section-bg"}>
                <div className={`container w-80 ${flexContent&&"d-flex"}`}>
                    {props.children}
                </div>
            </div>
        </section>
    );
}

export default SectionPart;