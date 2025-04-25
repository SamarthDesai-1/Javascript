#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

struct Process {
    int id;
    int arrival_time;
    int burst_time;
    int remaining_time;
    int waiting_time = 0;
    int turnaround_time = 0;
    bool in_queue = false;
};

// Sort by arrival time
bool compareArrival(Process a, Process b) {
    return a.arrival_time < b.arrival_time;
}

int main() {
    int n, quantum;
    cout << "Enter the number of processes: ";
    cin >> n;

    cout << "Enter time quantum: ";
    cin >> quantum;

    vector<Process> processes(n);

    for (int i = 0; i < n; i++) {
        processes[i].id = i + 1;
        cout << "Enter arrival time for Process " << processes[i].id << ": ";
        cin >> processes[i].arrival_time;
        cout << "Enter burst time for Process " << processes[i].id << ": ";
        cin >> processes[i].burst_time;
        processes[i].remaining_time = processes[i].burst_time;
    }

    // Sort processes by arrival time
    sort(processes.begin(), processes.end(), compareArrival);

    queue<int> q;
    int time = 0, completed = 0;
    int index = 0;

    // Load first available process(es)
    while (index < n && processes[index].arrival_time <= time) {
        q.push(index);
        processes[index].in_queue = true;
        index++;
    }

    while (!q.empty()) {
        int i = q.front();
        q.pop();

        if (processes[i].remaining_time > 0) {
            int exec_time = min(quantum, processes[i].remaining_time);
            processes[i].remaining_time -= exec_time;
            time += exec_time;

            // Check new arrivals during execution
            while (index < n && processes[index].arrival_time <= time) {
                if (!processes[index].in_queue) {
                    q.push(index);
                    processes[index].in_queue = true;
                }
                index++;
            }

            if (processes[i].remaining_time > 0) {
                q.push(i); // push back if not finished
            } else {
                processes[i].turnaround_time = time - processes[i].arrival_time;
                processes[i].waiting_time = processes[i].turnaround_time - processes[i].burst_time;
                completed++;
            }
        }

        // If queue is empty but processes still remain
        if (q.empty() && completed < n) {
            if (index < n) {
                time = processes[index].arrival_time;
                q.push(index);
                processes[index].in_queue = true;
                index++;
            }
        }
    }

    // Output
    float total_wt = 0, total_tat = 0;
    cout << "\nProcess\tArrival\tBurst\tWaiting\tTurnaround\n";
    for (const auto& p : processes) {
        cout << "P" << p.id << "\t" << p.arrival_time << "\t" << p.burst_time << "\t"
             << p.waiting_time << "\t" << p.turnaround_time << "\n";
        total_wt += p.waiting_time;
        total_tat += p.turnaround_time;
    }

    cout << "\nAverage Waiting Time: " << total_wt / n;
    cout << "\nAverage Turnaround Time: " << total_tat / n << "\n";

    return 0;
}
