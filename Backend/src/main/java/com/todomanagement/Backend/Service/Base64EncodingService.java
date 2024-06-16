package com.todomanagement.Backend.Service;

import java.util.Base64;
import java.util.Base64.Encoder;
// import java.util.Base64.Decoder;

public class Base64EncodingService {
    

    public static String encode(String credentials){
        Encoder encoder = Base64.getEncoder();
        return encoder.encodeToString(credentials.getBytes());
    }
        // String inputString = "GeeksForGeeks";

        // // Creating Base64 encoder and decoder instances.
        // Base64.Encoder encoder = Base64.getEncoder();
        // Base64.Decoder decoder = Base64.getDecoder();

        // // Encode the string to Base64 format.
        // String encodedString = encoder.encodeToString(inputString.getBytes());

        // // Decode the Base64 encoded string.
        // byte[] decodedBytes = decoder.decode(encodedString);
        // String decodedString = new String(decodedBytes);

        // System.out.println("Encoded String : " + encodedString);
        // System.out.println("Decoded String : " + decodedString);

}
