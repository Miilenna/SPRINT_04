package com.example.appprojecte2;

import android.os.Bundle;
import android.view.View;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;

public class profMostrarGrup extends AppCompatActivity {
    int page = 1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_prof_mostrar_grup);
        ImageButton iB1 = findViewById(R.id.iB1);
        ImageButton iB2 = findViewById(R.id.iB2);
        TextView tV = findViewById(R.id.tV);
        tV.setText(String.valueOf(page));
        iB1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (page > 1) {
                    page--;
                    tV.setText(String.valueOf(page));
                }
            }
        });
        iB2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (page < 3) {
                    page++;
                    tV.setText(String.valueOf(page));
                }
            }
        });
    }
}