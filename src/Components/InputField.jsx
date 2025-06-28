/*
  InputField component renders either a text input or textarea based on `textarea` prop.

  Props:
  - textarea: boolean to decide whether to render a <textarea> (true) or <input> (false)
  - ...props: other input/textarea props like name, value, onChange, touched, error, placeholder, etc.
*/

export const InputField = ({ textarea, ...props }) => (
    <>
        {textarea ? (
            <textarea
                className="w-full p-3 border rounded"
                rows="5"
                {...props}
            />
        ) : (
            <input
                className="w-full p-3 border rounded"
                {...props}
            />
          
            
        )
        }
        
        {/*
        Display validation error if:
                - the field has been touched
                - and there is an error message
            */}
        {props.touched && props.error && (
            <p className="text-red-500 text-sm mt-1">{props.error}</p>
        )}

    </>
);
