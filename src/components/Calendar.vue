<template>
    <div class="amoba-calendar wrapper">
        <header>
            <p class="current-date">{{ currentDate }}</p>
            <div class="icons">
                <span id="prev" @click="prevIcon()"><IconArrowLeft height="20" /></span>
                <span id="next" @click="nextIcon()"><IconArrowRight height="20" /></span>
            </div>
        </header>
        <div class="calendar">
            <ul class="weeks">
                <li>Sunday</li>
                <li>Monday</li>
                <li>Tuesday</li>
                <li>Wednesday</li>
                <li>Thursday</li>
                <li>Friday</li>
                <li>Saturday</li>
            </ul>
            <ul class="days">
                <li
                    v-for="(day, index) in days"
                    :key="index"
                    :class="{ inactive: !day.isCurrentMonth, active: day.isToday }"
                >
                    {{ day.date }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import IconArrowLeft from './icons/IconArrowLeft.vue'
import IconArrowRight from './icons/IconArrowRight.vue'

export default {
    data() {
        return {
            date: new Date(),
            currYear: new Date().getFullYear(),
            currMonth: new Date().getMonth(),
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            days: []
        }
    },
    mounted() {
        this.renderCalendar()
    },
    computed: {
        currentDate() {
            return this.months[this.currMonth] + ' ' + this.currYear
        }
    },
    methods: {
        renderCalendar() {
            let date = new Date()

            let firstDayOfMonth = new Date(this.currYear, this.currMonth).getDay()
            let lastDateOfMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate()
            let lastDayOfMonth = new Date(this.currYear, this.currMonth, lastDateOfMonth).getDay()
            let lastDateOfLastMonth = new Date(this.currYear, this.currMonth, 0).getDate()

            for (let i = firstDayOfMonth; i > 0; i--) {
                this.days.push({
                    date: lastDateOfLastMonth - i + 1,
                    isCurrentMonth: false,
                    isToday: false
                })
            }

            for (let i = 1; i <= lastDateOfMonth; i++) {
                let isToday =
                    i === date.getDate() &&
                    this.currMonth === new Date().getMonth() &&
                    this.currYear === new Date().getFullYear()
                        ? 'active'
                        : ''
                this.days.push({
                    date: i,
                    isCurrentMonth: true,
                    isToday: isToday
                })
            }

            for (let i = lastDayOfMonth; i < 6; i++) {
                this.days.push({
                    date: i - lastDayOfMonth + 1,
                    isCurrentMonth: false,
                    isToday: false
                })
            }
        },
        prevIcon() {
            let date = null
            this.days = []
            this.currMonth = this.currMonth - 1

            if (this.currMonth < 0 || this.currMonth > 11) {
                date = new Date(this.currYear, this.currMonth, new Date().getDate())
                this.currYear = date.getFullYear()
                this.currMonth = date.getMonth()
            } else {
                date = new Date()
            }
            this.renderCalendar()
        },
        nextIcon() {
            let date = null
            this.days = []
            this.currMonth = this.currMonth + 1

            if (this.currMonth < 0 || this.currMonth > 11) {
                date = new Date(this.currYear, this.currMonth, new Date().getDate())
                this.currYear = date.getFullYear()
                this.currMonth = date.getMonth()
            } else {
                date = new Date()
            }
            this.renderCalendar()
        }
    },
    watch: {},
    components: {
        IconArrowLeft,
        IconArrowRight
    }
}
</script>

<style scoped>
.wrapper {
    width: 450px;
    background: #fff;
}
.wrapper header {
    display: flex;
    align-items: center;
    padding: 25px 30px 10px;
    justify-content: space-between;
}
header .icons {
    display: flex;
}
header .icons span {
    height: 38px;
    width: 38px;
    margin: 0 1px;
    cursor: pointer;
    color: #878787;
    text-align: center;
    line-height: 38px;
    font-size: 1.9rem;
    user-select: none;
    border-radius: 50%;
}
.icons span:last-child {
    margin-right: -10px;
}
header .icons span:hover {
    background: #f2f2f2;
}
header .current-date {
    font-size: 1.45rem;
    font-weight: 500;
}
.calendar {
    padding: 20px;
}
.calendar ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    text-align: center;
}
.calendar .days {
    margin-bottom: 20px;
}
.calendar li {
    color: #333;
    width: calc(100% / 7);
    font-size: 12px;
}
.calendar .weeks li {
    font-weight: 500;
    cursor: default;
}
.calendar .days li {
    z-index: 1;
    cursor: pointer;
    position: relative;
    margin-top: 30px;
}
.days li.inactive {
    color: #aaa;
}
.days li.active {
    color: #fff;
}
.days li::before {
    position: absolute;
    content: '';
    left: 50%;
    top: 50%;
    height: 40px;
    width: 40px;
    z-index: -1;
    border-radius: 50%;
    transform: translate(-50%, -50%);
}
.days li.active::before {
    background: #9b59b6;
}
.days li:not(.active):hover::before {
    background: #f2f2f2;
}
</style>
