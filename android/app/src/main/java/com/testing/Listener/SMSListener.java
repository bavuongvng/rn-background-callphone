package com.testing.Listener;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;

public class SMSListener extends BroadcastReceiver {
    final String TAG = "TEST";
    @Override
    public void onReceive(Context context, Intent intent) {
        Log.d(TAG, "GET Receiver");
        String url = "tel:+84123654789";
        try {
            Intent myIntent = new Intent(Intent.ACTION_CALL, Uri.parse(url));
            myIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(myIntent);
        }catch (Exception ex) {
            Log.d(TAG, ex.getMessage());
        }

    }
}
